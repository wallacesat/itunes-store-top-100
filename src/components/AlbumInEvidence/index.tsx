import { faStar } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';

import { handleOpenExternalLink } from '~/utils/handleOpenExternalLink';
import FavoriteButton from '../FavoriteButton';
import Label from '../Label';
import LabelLink from '../LabelLink';
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
          src={album.image}
          alt={album.name}
          width={250}
          className="rounded-md shadow-xl"
        />
      </div>
      <div className="flex w-44 items-center justify-between pr-1">
        <FavoriteButton
          isFavorite={isFavorite}
          handleClickFavorite={() => handleClickFavorite(album.id)}
          iconClass={isFavorite ? 'text-neutral-light' : ''}
        />
        {album.category && (
          <RoundedButton
            icon={faStar}
            iconSize="1x"
            label={album.category.name}
            buttonClass="bg-category"
            labelClass="text-neutral-light"
            onClick={() => handleOpenExternalLink(album.category.link)}
          />
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <LabelLink
          className="mb-2 text-lg font-extralight"
          onClick={() => handleOpenExternalLink(album.link)}
        >
          {album.name}
        </LabelLink>
        <LabelLink
          className="text-lg font-bold"
          onClick={() => handleOpenExternalLink(album.artist.link)}
        >
          {album.artist.name}
        </LabelLink>
        <Label className="border-t border-b my-2 py-2 md:mb-6 md:pb-3 border-neutral-lightest md:border-neutral-darkest md:mt-6 md:pt-3">{`Price: ${album.price}`}</Label>
        <Label className="leading-tight md:leading-normal text-center text-xs font-extralight max-w-sm">{`${album.rights}`}</Label>
      </div>
    </div>
  );
};

export default AlbumInEvidence;
