import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Card = ({ title, children, img, url, repo }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang'));
  }, []);

  return (
    <article className='card text-center shadow-2xl bg-base-200 border border-base-100'>
      <figure className='px-6 pt-6'>
        <img
          src={img}
          className='rounded-lg border border-neutral border-opacity-20'
        />
      </figure>
      <div className='card-body text-left p-6'>
        <h2 className='card-title flex justify-between'>
          {title}
          {repo && (
            <a href={repo} target='_blank'>
              <button className='btn btn-ghost btn-neutral btn-circle btn-sm text-2xl'>
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </a>
          )}
        </h2>
        <div>{children}</div>
        {url && (
          <div className='justify-center card-actions'>
            <a href={url} target='_blank'>
              <button className='btn btn-outline btn-accent'>
                {t('demo')}
              </button>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default Card;
