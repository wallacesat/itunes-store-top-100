import { ReactNode } from 'react';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export interface StorageContextProps {
  albuns: ItunesStoreTop100Data[];
  isFetched: boolean;
  isFetching: boolean;
}

export type StorageProviderProps = {
  children: ReactNode;
};
