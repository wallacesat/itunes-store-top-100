/* eslint-disable no-unused-vars */

import * as React from 'react';
import { filter } from 'lodash';

import { useAlbums } from '~/contexts/AlbumsContext';
import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

type useSearchAlbumReturn = {
  searchAlbum: (query: string) => ItunesStoreTop100Data[];
};

export const useSearchAlbum = (): useSearchAlbumReturn => {
  const { albuns } = useAlbums();

  const albumsCopy = React.useMemo(() => {
    return new Array(...albuns);
  }, [albuns]);

  const searchAlbum = React.useCallback(
    (query: string) => {
      return filter(
        albumsCopy,
        album =>
          album.name.toLowerCase().includes(query.toLowerCase()) ||
          album.artist.name.toLowerCase().includes(query.toLowerCase()),
      );
    },
    [albumsCopy],
  );

  return {
    searchAlbum,
  };
};

export default useSearchAlbum;
