import React from 'react';

const AlbumListSection: React.FC = ({ children }) => {
  return (
    <div className="md:col-span-2 lg:col-span-1 lg:flex flex-col rounded-lg  h-5/6 lg:h-full max-h-full overflow-hidden z-0">
      {children}
    </div>
  );
};

export default AlbumListSection;
