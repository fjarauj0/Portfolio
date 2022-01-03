import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang'));
  }, []);

  return (
    <div
      id='hero'
      className='hero min-h-screen'
      // style={{
      //   backgroundImage: "url('')",
      // }}
    >
      <div className='hero-overlay bg-opacity-60 bg-base-300 relative'>
        <a
          href='#projects'
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14 z-40 animate-bounce transition duration-300 ease-in-out hover:text-accent'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 13l-5 5m0 0l-5-5m5 5V6'
            />
          </svg>
        </a>
      </div>
      <motion.div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            {t('hello')}
            <span className='text-accent'>Francisco Araujo</span>
          </h1>
          <p className='mb-4'>{t('intro')}</p>
          <p className='mb-4 text-5xl md:text-6xl'>
            <a href='mailto:fjaraujo.dev@gmail.com' target='_blank'>
              <FontAwesomeIcon className='social-btn' icon={faEnvelope} />
            </a>
            <a href='http://blog.fjaraujo.com/' target='_blank'>
              <FontAwesomeIcon className='social-btn' icon={faWordpress} />
            </a>
            <a href='https://github.com/fjarauj0' target='_blank'>
              <FontAwesomeIcon className='social-btn' icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/fjarauj0/' target='_blank'>
              <FontAwesomeIcon className='social-btn' icon={faLinkedinIn} />
            </a>
          </p>
          {/* <button className='btn btn-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
              />
            </svg>
            Resume
          </button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
