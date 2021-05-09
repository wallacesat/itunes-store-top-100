/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import { sortBy, reverse } from 'lodash';

import useItunesStoreTop100 from '~/hooks/useItunesStoreTop100';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

import { SortAlbuns, StorageContextProps, StorageProviderProps } from './types';

export const StorageContext = React.createContext<StorageContextProps>(
  {} as StorageContextProps,
);

export const useStorage = (): StorageContextProps =>
  React.useContext(StorageContext);

export function StorageProvider(
  props: StorageProviderProps,
): React.ReactElement {
  const { children } = props;

  const { isFetching, isFetched, data } = useItunesStoreTop100();

  const [albuns, setAlbuns] = React.useState<ItunesStoreTop100Data[]>([]);
  const [sortedAlbumsInfo, setSortedAlbumsInfo] = React.useState({
    isDescOrder: false,
    sortedBy: 'album',
  });

  const sortAlbuns: SortAlbuns = (isDescOrder, sortedBy = 'album') => {
    const sortedAlbuns = sortBy(data.entry, [
      album => (sortedBy === 'album' ? album.name : album.artist.name),
    ]);

    setSortedAlbumsInfo({
      isDescOrder,
      sortedBy,
    });

    setAlbuns(isDescOrder ? reverse(sortedAlbuns) : sortedAlbuns);
  };

  React.useEffect(() => {
    if (isFetched && data.entry) {
      sortAlbuns();
    }
  }, [isFetched, data]);

  return (
    <StorageContext.Provider
      value={{
        albuns,
        isFetched,
        isFetching,
        sortedAlbumsInfo,
        sortAlbuns,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
