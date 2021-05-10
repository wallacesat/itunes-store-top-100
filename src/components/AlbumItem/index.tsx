import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
})`
  & button#image_album_button {
    min-width: 56px;
    min-height: 56px;
  }
`;

const AlbumItem: React.FC<AlbumItemProps> = ({
  album,
  isFavorite,
  handleClickFavorite,
  handleClickAlbum,
}) => {
  return (
    <Main>
      <button
        id="image_album_button"
        type="button"
        className="h-14 w-14 rounded-md bg-neutral-light cursor-pointer outline-none focus:outline-none"
        onClick={() => handleClickAlbum(album.id)}
      >
        {(album.image && (
          <img
            src={album.image}
            alt={album.name}
            className="rounded-md shadow-lg min-w-full min-h-full"
          />
        )) || (
          <div className="w-14 h-14 flex items-center justify-center rounded-md bg-neutral-light">
            <FontAwesomeIcon
              icon={faCompactDisc}
              size="2x"
              color="rgba(0,0,0,0.4)"
            />
          </div>
        )}
      </button>
      <FavoriteButton
        isFavorite={isFavorite}
        handleClickFavorite={() => handleClickFavorite(album.id)}
      />
      <div className="flex flex-1">
        <LabelLink
          hoverColor="#1068DB"
          onClick={() => handleOpenExternalLink(album.link)}
          className="text-left"
        >
          {album.name}
        </LabelLink>
      </div>
      <div className="flex flex-1 justify-between">
        <div className="hidden sm:flex">
          <LabelLink
            hoverColor="#1068DB"
            onClick={() => handleOpenExternalLink(album.artist.link)}
            className="text-left"
          >
            {album.artist.name}
          </LabelLink>
        </div>

        <Label className="text-right w-full">{album.price}</Label>
      </div>
    </Main>
  );
};

export default AlbumItem;
