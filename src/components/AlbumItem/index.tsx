import * as React from 'react';
import styled from 'styled-components';

import FavoriteButton from '../FavoriteButton';
import Label from '../Label';

import { AlbumItemProps } from './types';

const Main = styled.div.attrs({
  className:
    'w-full p-2 pr-3 cursor-default flex items-center justify-between border-b border-neutral-lightest bg-primary-medium hover:bg-primary-darkest',
})``;

const AlbumItem: React.FC<AlbumItemProps> = ({
  id,
  img,
  albumName,
  artistName,
  price,
  isFavorite,
  handleClickFavorite,
  handleClickAlbum,
}) => {
  return (
    <Main>
      <button
        type="button"
        className="w-14 h-14 rounded-md bg-neutral-light cursor-pointer focus:outline-none"
        onClick={() => handleClickAlbum(id)}
      >
        <img src={img} alt={albumName} className="rounded-md shadow-lg" />
      </button>
      <FavoriteButton
        isFavorite={isFavorite}
        handleClickFavorite={() => handleClickFavorite(id)}
      />
      <div className="flex flex-1">
        <Label>{albumName}</Label>
      </div>
      <div className="flex flex-1 justify-between">
        <Label>{artistName}</Label>
        <Label>{price}</Label>
      </div>
    </Main>
  );
};

export default AlbumItem;
