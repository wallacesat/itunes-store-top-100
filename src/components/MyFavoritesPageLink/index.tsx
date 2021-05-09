import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Label from '../Label';

const MyFavoritesPageLink: React.FC = () => {
  return (
    <div className="flex bg-info rounded-full py-1 pl-2 pr-4 items-center cursor-pointer">
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          size="sm"
          className="text-neutral-light mr-3"
        />
      </div>
      <Label>Favorites</Label>
    </div>
  );
};

export default MyFavoritesPageLink;
