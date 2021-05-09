import * as React from 'react';

import Label from '../Label';
import { AlbumNotFoundProps } from './types';

const AlbumNotFound: React.FC<AlbumNotFoundProps> = ({ label }) => {
  return (
    <div className="bg-primary-medium flex py-4 justify-center rounded-b-lg">
      <Label className="text-xl">{label}</Label>
    </div>
  );
};

export default AlbumNotFound;
