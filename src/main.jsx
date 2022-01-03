import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { Helmet } from 'react-helmet';
import './i18n';
import '@/index.css';
import ScrollUp from '@/components/ScrollUp';

ReactDOM.render(
  <>
    <Helmet
      defaultTitle='Francisco Araujo'
      titleTemplate='%s | Francisco Araujo'
    >
      <meta charSet='utf-8' />
      <html lang='id' amp />
    </Helmet>
    <App />
    <ScrollUp />
  </>,
  document.getElementById('root')
);
