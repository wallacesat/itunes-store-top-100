import React from 'react';
import Label from '../Label';

const AlbumNotFound: React.FC = () => {
  return (
    <div className="bg-primary-medium flex py-4 justify-center rounded-b-lg">
      <Label className="text-xl">Albums not found...</Label>
    </div>
  );
};

export default AlbumNotFound;
