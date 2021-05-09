import React from 'react';

const AlbumListSection: React.FC = ({ children }) => {
  return (
    <div className="h-full max-h-full overflow-hidden z-10">{children}</div>
  );
};

export default AlbumListSection;
