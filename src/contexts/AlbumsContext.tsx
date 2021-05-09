/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import { sortBy, reverse } from 'lodash';

import useItunesStoreTop100 from '~/hooks/useItunesStoreTop100';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

import { SortAlbuns, AlbumsContextProps, AlbumsProviderProps } from './types';

export const AlbumsContext = React.createContext<AlbumsContextProps>(
  {} as AlbumsContextProps,
);

export const useAlbums = (): AlbumsContextProps =>
  React.useContext(AlbumsContext);

export function AlbumsProvider(props: AlbumsProviderProps): React.ReactElement {
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
    <AlbumsContext.Provider
      value={{
        albuns,
        isFetched,
        isFetching,
        sortedAlbumsInfo,
        sortAlbuns,
      }}
    >
      {children}
    </AlbumsContext.Provider>
  );
}
