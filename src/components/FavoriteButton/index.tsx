import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import { FavoriteButtonProps } from './types';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  handleClickFavorite,
  isFavorite,
  iconClass,
}) => {
  return (
    <div className="w-14 h-14 flex justify-center items-center mr-4">
      <FontAwesomeIcon
        icon={isFavorite ? faHeart : faHeartRegular}
        size="lg"
        className={`cursor-pointer ${
          isFavorite ? 'text-secondary-medium' : 'text-neutral-medium'
        } ${iconClass}`}
        onClick={handleClickFavorite}
      />
    </div>
  );
};

export default FavoriteButton;
