import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card';

import mapbox from '@/images/mapbox.png';
import vnewspaper from '@/images/vnewspaper.png';
import vbooks from '@/images/vbooks.png';
import cc2022 from '@/images/cc2022.png';
import expo from '@/images/expo.png';
import kanbanboard from '@/images/kanbanboard.png';

const FeaturedProjects = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang'));
  }, []);

  return (
    <section id='projects' className='bg-base-200 py-16'>
      <div className='max-w-screen-2xl mx-auto px-8'>
        <h2 className='my-8'>{t('projects')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card
            title={t('featured_projects.cc2022.title')}
            img={cc2022}
            url='https://congreso.ceead.org.mx/'
          >
            <p>{t('featured_projects.cc2022.desc')}</p>
          </Card>
          <Card
            title={t('featured_projects.expo.title')}
            img={expo}
            url='https://expo.ceead.org.mx/'
          >
            <p>{t('featured_projects.expo.desc')}</p>
          </Card>
          <Card
            title={t('featured_projects.vnewspaper.title')}
            img={vnewspaper}
            url='https://fjarauj0.github.io/VintageNewspaper/'
            repo='https://github.com/fjarauj0/VintageNewspaper'
          >
            <p>{t('featured_projects.vnewspaper.desc')}</p>
          </Card>
          <Card
            title={t('featured_projects.mapbox.title')}
            img={mapbox}
            url='https://mapbox-route.vercel.app/'
            repo='https://github.com/fjarauj0/mapbox-route'
          >
            <p>{t('featured_projects.mapbox.desc')}</p>
          </Card>
          <Card
            title={t('featured_projects.vebooks.title')}
            img={vbooks}
            url='https://fjarauj0.github.io/VanillaBooks/'
            repo='https://github.com/fjarauj0/VanillaBooks'
          >
            <p>{t('featured_projects.vebooks.desc')}</p>
          </Card>
          <Card
            title={t('featured_projects.kanbanboard.title')}
            img={kanbanboard}
            url='https://kanbanboard-rho.vercel.app/'
            repo='https://github.com/fjarauj0/Kanbanboard'
          >
            <p>{t('featured_projects.kanbanboard.desc')}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
