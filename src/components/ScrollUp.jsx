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
      style={{
        opacity: showScroll ? '1' : '.2',
        visibility: showScroll ? '' : 'hidden',
        cursor: 'pointer',
        display: 'inline',
      }}
    ></a>
  );
};

export default ScrollUp;
