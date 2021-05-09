import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import FavoriteButton from '../FavoriteButton';
import Label from '../Label';
import RoundedButton from '../RoundedButton';

import { AlbumInEvidenceProps } from './types';

const AlbumInEvidence: React.FC<AlbumInEvidenceProps> = ({
  album,
  isFavorite,
  handleClickFavorite,
}) => {
  return !album ? null : (
    <div className="flex flex-col h-full items-center justify-center">
      <div>
        <img
          src={album.image[2].uri}
          alt={album.name}
          width={250}
          className="rounded-md shadow-xl"
        />
      </div>
      <div className="flex w-44 items-center justify-between">
        <FavoriteButton
          isFavorite={isFavorite}
          handleClickFavorite={() => handleClickFavorite(album.id)}
        />
        <RoundedButton icon={faInfoCircle} iconSize="1x" label="info" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Label className="mb-2 text-lg font-extralight">{album.name}</Label>
        <Label className="text-lg font-bold">{album.artist.name}</Label>
        <Label className="border-t border-neutral-lightest mt-6 pt-6">{`Price: ${album.price}`}</Label>
      </div>
    </div>
  );
};

export default AlbumInEvidence;
