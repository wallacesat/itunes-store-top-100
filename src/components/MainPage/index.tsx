import React from 'react';

const MainPage: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-screen max-h-screen p-6 relative">
      {children}
    </div>
  );
};

export default MainPage;
