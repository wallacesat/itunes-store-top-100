/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';

import useItunesStoreTop100 from '~/hooks/useItunesStoreTop100';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

import { AlbumsContextProps, AlbumsProviderProps } from './types';

export const AlbumsContext = React.createContext<AlbumsContextProps>(
  {} as AlbumsContextProps,
);

export const useAlbums = (): AlbumsContextProps =>
  React.useContext(AlbumsContext);

export function AlbumsProvider(props: AlbumsProviderProps): React.ReactElement {
  const { children } = props;

  const { isFetching, isFetched, data } = useItunesStoreTop100();

  const [albuns, setAlbuns] = React.useState<ItunesStoreTop100Data[]>([]);

  React.useEffect(() => {
    if (isFetched && data.entry) {
      setAlbuns(data.entry);
    }
  }, [isFetched, data]);

  return (
    <AlbumsContext.Provider
      value={{
        albuns,
        isFetched,
        isFetching,
      }}
    >
      {children}
    </AlbumsContext.Provider>
  );
}
