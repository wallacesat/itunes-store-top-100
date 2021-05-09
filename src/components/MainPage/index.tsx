import React from 'react';

const MainPage: React.FC = ({ children }) => {
  return (
    <div className="z-50 grid grid-cols-1 p-2 md:grid-cols-3 md:gap-x-2 lg:grid-cols-2 h-screen max-h-screen md:p-6 relative">
      {children}
    </div>
  );
};

export default MainPage;
