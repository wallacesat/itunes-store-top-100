/* eslint-disable no-unused-vars */

import { ReactNode } from 'react';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export type SortAlbuns = (
  isDescOrder?: boolean,
  sortedBy?: 'album' | 'artist',
) => void;

export interface StorageContextProps {
  albuns: ItunesStoreTop100Data[];
  isFetched: boolean;
  isFetching: boolean;
  sortedAlbumsInfo: {
    isDescOrder: boolean;
    sortedBy: string;
  };
  sortAlbuns: SortAlbuns;
}

export type StorageProviderProps = {
  children: ReactNode;
};
