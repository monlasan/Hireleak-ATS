import React from 'react';

const AppLogoHeader = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className='h-8 w-8 bg-primary justify-center rounded items-center flex text-violet-700 font-black'></div>
      <span className='text-lg font-medium text-white'>embauch</span>
    </div>
  );
};

export default AppLogoHeader;
