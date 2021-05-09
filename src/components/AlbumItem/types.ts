/* eslint-disable no-unused-vars */

import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export interface AlbumItemProps {
  album: ItunesStoreTop100Data;
  isFavorite?: boolean;
  handleClickFavorite?: (id: string) => void;
  handleClickAlbum?: (id: string) => void;
}
