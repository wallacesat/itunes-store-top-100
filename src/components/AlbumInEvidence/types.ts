/* eslint-disable no-unused-vars */

import { ItunesStoreTop100Data } from '~/service/itunesStore/types';

export interface AlbumInEvidenceProps {
  album: ItunesStoreTop100Data;
  isFavorite?: boolean;
  handleClickFavorite?: (id: string) => void;
}
