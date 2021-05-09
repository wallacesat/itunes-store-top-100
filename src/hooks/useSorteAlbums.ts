/* eslint-disable no-unused-vars */

import * as React from 'react';
import { sortBy, reverse } from 'lodash';

import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export type sortedAlbumsInfoProps = {
  isDescOrder: boolean;
  sortedBy?: 'album' | 'artist';
};

export type SortAlbuns = (
  albumsList: ItunesStoreTop100Data[],
  isDescOrder?: boolean,
  sortedBy?: 'album' | 'artist',
) => ItunesStoreTop100Data[];

export type useSortAlbumsRetunr = {
  sortAlbuns: SortAlbuns;
  sortedAlbumsInfo: sortedAlbumsInfoProps;
};

export const useSortAlbums = (): useSortAlbumsRetunr => {
  const [
    sortedAlbumsInfo,
    setSortedAlbumsInfo,
  ] = React.useState<sortedAlbumsInfoProps>({
    isDescOrder: false,
    sortedBy: 'album',
  });

  const sortAlbuns: SortAlbuns = (
    albumsList,
    isDescOrder,
    sortedBy = 'album',
  ) => {
    const sortedAlbuns = sortBy(albumsList, [
      album => (sortedBy === 'album' ? album.name : album.artist.name),
    ]);

    setSortedAlbumsInfo({
      isDescOrder,
      sortedBy,
    });

    return isDescOrder ? reverse(sortedAlbuns) : sortedAlbuns;
  };

  return {
    sortAlbuns,
    sortedAlbumsInfo,
  };
};

export default useSortAlbums;
