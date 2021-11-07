import React from 'react';
import logo from '@/images/Francisco Araujo-logo/vector/isolated-layout.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='p-4 bg-neutral-focus text-neutral-content'>
      <div className='footer max-w-screen-2xl mx-auto flex justify-between items-center'>
        <div className='flex items-center '>
          <img className='w-8' src={logo} alt='' />
          <p>© 2021 - fjaraujo</p>
        </div>
        <div className='inline text-2xl'>
          <a href='https://www.instagram.com/fjarauj0/' target='_blank'>
            <FontAwesomeIcon
              className='social-btn hover:text-accent'
              icon={faInstagram}
            />
          </a>
          <a href='https://twitter.com/fjarauj0' target='_blank'>
            <FontAwesomeIcon
              className='social-btn hover:text-accent'
              icon={faTwitter}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// max-w-screen-2xl mx-auto flex justify-between
