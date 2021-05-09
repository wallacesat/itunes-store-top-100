import * as React from 'react';
import { faHeart, faTrophy } from '@fortawesome/free-solid-svg-icons';

import Label from '../Label';

import RoundedButton from '../RoundedButton';
import { AlbumListHeaderProps } from './types';

const AlbumListHeader: React.FC<AlbumListHeaderProps> = ({
  isShowingFavorites,
  onClickShowFavorites,
  onClickShowTop100,
}) => {
  return (
    <div className="mt-10 mb-2 flex justify-between items-center">
      <Label className="text-xl font-bold bg-primary-medium py-1 px-4 rounded-lg">
        {isShowingFavorites ? 'My favorites list' : 'Top 100'}
      </Label>
      {(isShowingFavorites && (
        <RoundedButton
          icon={faTrophy}
          iconSize="sm"
          label="Top 100"
          onClick={onClickShowTop100}
        />
      )) || (
        <RoundedButton
          icon={faHeart}
          iconSize="sm"
          label="Favorites"
          onClick={onClickShowFavorites}
        />
      )}
    </div>
  );
};

export default AlbumListHeader;
