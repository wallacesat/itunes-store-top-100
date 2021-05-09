/* eslint-disable no-unused-vars */

import { ReactNode } from 'react';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export interface AlbumsContextProps {
  albuns: ItunesStoreTop100Data[];
  isFetched: boolean;
  isFetching: boolean;
}

export type AlbumsProviderProps = {
  children: ReactNode;
};
