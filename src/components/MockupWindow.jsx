import React from 'react';

const MockupWindow = ({ children }) => {
  return (
    <div className='mockup-window bg-base-300 m-4'>
      <div className='flex justify-center p-2 bg-base-200'>{children}</div>
    </div>
  );
};

export default MockupWindow;
