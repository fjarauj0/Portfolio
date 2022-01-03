import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <a
      id='scrollUp'
      onClick={scrollTop}
      className='transition-all'
      style={{
        opacity: showScroll ? '1' : '.2',
        visibility: showScroll ? '' : 'hidden',
        cursor: 'pointer',
        display: 'inline',
      }}
    >
      <div className='rounded-full p-3 bg-gray-600 opacity-50 fixed right-6 bottom-10 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 10l7-7m0 0l7 7m-7-7v18'
          />
        </svg>
      </div>
    </a>
  );
};

export default ScrollUp;
