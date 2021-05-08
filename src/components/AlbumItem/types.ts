/* eslint-disable no-unused-vars */

export interface AlbumItemProps {
  id: string;
  img: string;
  albumName: string;
  artistName: string;
  price: string;
  isFavorite?: boolean;
  handleClickFavorite?: (id: string) => void;
  handleClickAlbum?: (id: string) => void;
}
