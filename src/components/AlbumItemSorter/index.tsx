import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';

import Label from '../Label';
import { AlbumItemSorterProps } from './types';

const AlbumItemSorter: React.FC<AlbumItemSorterProps> = ({
  isByAlbum,
  isDescOrder,
  handleSortByAlbum,
  handleSortByArtist,
}) => {
  return (
    <div className="bg-primary-medium flex pl-36 md:pl-32 py-1">
      <button
        type="button"
        className="flex-1 ml-2 outline-none focus:outline-none text-left "
        onClick={handleSortByAlbum}
      >
        <div className="flex items-center justify-between mr-4 md:mr-12">
          <Label>Album</Label>
          <FontAwesomeIcon
            icon={
              isDescOrder && isByAlbum ? faLongArrowAltUp : faLongArrowAltDown
            }
            size="1x"
            className={isByAlbum ? 'text-info' : 'text-neutral-medium'}
          />
        </div>
      </button>
      <button
        type="button"
        className="hidden md:flex flex-1 -ml-6 outline-none focus:outline-none text-left"
        onClick={handleSortByArtist}
      >
        <div className="flex items-center justify-between mr-6 flex-1">
          <Label>Artist</Label>
          <FontAwesomeIcon
            icon={
              isDescOrder && !isByAlbum ? faLongArrowAltUp : faLongArrowAltDown
            }
            size="1x"
            className={!isByAlbum ? 'text-info' : 'text-neutral-medium'}
          />
        </div>
      </button>
    </div>
  );
};

export default AlbumItemSorter;
