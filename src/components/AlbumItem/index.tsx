import * as React from 'react';
import styled from 'styled-components';

import { handleOpenExternalLink } from '~/utils/handleOpenExternalLink';
import FavoriteButton from '../FavoriteButton';
import Label from '../Label';
import LabelLink from '../LabelLink';

import { AlbumItemProps } from './types';

const Main = styled.div.attrs({
  className:
    'w-full p-2 pr-3 cursor-default flex items-center justify-between border-b border-neutral-lightest bg-primary-medium hover:bg-primary-darkest',
})``;

const AlbumItem: React.FC<AlbumItemProps> = ({
  album,
  isFavorite,
  handleClickFavorite,
  handleClickAlbum,
}) => {
  return (
    <Main>
      <button
        type="button"
        className="w-14 h-14 rounded-md bg-neutral-light cursor-pointer focus:outline-none"
        onClick={() => handleClickAlbum(album.id)}
      >
        <img
          src={album.image}
          alt={album.name}
          className="rounded-md shadow-lg"
        />
      </button>
      <FavoriteButton
        isFavorite={isFavorite}
        handleClickFavorite={() => handleClickFavorite(album.id)}
      />
      <div className="flex flex-1">
        <LabelLink
          hoverColor="#1068DB"
          onClick={() => handleOpenExternalLink(album.link)}
        >
          {album.name}
        </LabelLink>
      </div>
      <div className="flex flex-1 justify-between">
        <LabelLink
          hoverColor="#1068DB"
          onClick={() => handleOpenExternalLink(album.artist.link)}
        >
          {album.artist.name}
        </LabelLink>
        <Label>{album.price}</Label>
      </div>
    </Main>
  );
};

export default AlbumItem;
