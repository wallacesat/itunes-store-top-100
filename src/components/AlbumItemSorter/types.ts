export interface AlbumItemSorterProps {
  isByAlbum?: boolean;
  isByArtist?: boolean;
  isDescOrder?: boolean;
  handleSortByAlbum?: () => void;
  handleSortByArtist?: () => void;
}
