/* eslint-disable no-unused-vars */

import * as React from 'react';
import { filter } from 'lodash';

import { useAlbums } from '~/contexts/AlbumsContext';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

type useSearchAlbumReturn = {
  searchAlbum: (
    query: string,
    albunsList?: ItunesStoreTop100Data[],
  ) => ItunesStoreTop100Data[];
};

export const useSearchAlbum = (): useSearchAlbumReturn => {
  const { albuns } = useAlbums();

  const albumsCopy = React.useCallback(
    (albunsList: ItunesStoreTop100Data[]) => {
      return new Array(...albunsList);
    },
    [],
  );

  const searchAlbum = React.useCallback(
    (query: string, albunsList: ItunesStoreTop100Data[]) => {
      return filter(
        albumsCopy((albunsList || []).length ? albunsList : albuns),
        album =>
          album.name.toLowerCase().includes(query.toLowerCase()) ||
          album.artist.name.toLowerCase().includes(query.toLowerCase()),
      );
    },
    [albumsCopy, albuns],
  );

  return {
    searchAlbum,
  };
};

export default useSearchAlbum;
