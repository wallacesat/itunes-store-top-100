import * as React from 'react';

import useItunesStoreTop100 from '~/hooks/useItunesStoreTop100';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

import { StorageContextProps, StorageProviderProps } from './types';

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

  React.useEffect(() => {
    if (isFetched && data.entry) {
      setAlbuns(data.entry);
    }
  }, [isFetched, data]);

  return (
    <StorageContext.Provider
      value={{
        albuns,
        isFetched,
        isFetching,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
