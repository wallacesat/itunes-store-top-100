import * as React from 'react';
import Label from '../Label';

import MyFavoritesPageLink from '../MyFavoritesPageLink';

const AlbumListHeader: React.FC = () => {
  return (
    <div className="mt-10 mb-2 flex justify-between items-center">
      <Label className="text-lg">Top 100</Label>
      <MyFavoritesPageLink />
    </div>
  );
};

export default AlbumListHeader;
