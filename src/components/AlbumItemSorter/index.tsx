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
  isByArtist,
  isDescOrder,
  handleSortByAlbum,
  handleSortByArtist,
}) => {
  return (
    <div className="bg-primary-medium flex pl-32 py-1">
      <button
        type="button"
        className="flex-1 ml-2 focus:outline-none text-left"
        onClick={handleSortByAlbum}
      >
        <div className="flex items-center justify-between mr-12">
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
        className="flex-1 -ml-6 focus:outline-none text-left"
        onClick={handleSortByArtist}
      >
        <div className="flex items-center justify-between mr-20">
          <Label>Artist</Label>
          <FontAwesomeIcon
            icon={
              isDescOrder && isByArtist ? faLongArrowAltUp : faLongArrowAltDown
            }
            size="1x"
            className={isByArtist ? 'text-info' : 'text-neutral-medium'}
          />
        </div>
      </button>
    </div>
  );
};

export default AlbumItemSorter;