import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import Label from '../Label';
import { InfoButtonProps } from './types';

const InfoButton: React.FC<InfoButtonProps> = ({ handleClickFavorite }) => {
  return (
    <div className="bg-info rounded-full py-1 pl-2 pr-4 cursor-pointer flex justify-center items-center">
      <FontAwesomeIcon
        icon={faInfoCircle}
        size="1x"
        className="text-neutral-medium mr-2"
        onClick={handleClickFavorite}
      />
      <Label>info</Label>
    </div>
  );
};

export default InfoButton;
