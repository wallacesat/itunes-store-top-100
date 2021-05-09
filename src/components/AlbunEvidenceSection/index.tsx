import React from 'react';

const AlbunEvidenceSection: React.FC = ({ children }) => {
  return (
    <div className="h-full max-h-full md:col-span-1 lg:col-span-1 lg:flex justify-center items-center z-10">
      {children}
    </div>
  );
};

export default AlbunEvidenceSection;
