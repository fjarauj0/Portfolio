import React, { useEffect, useState } from 'react';
import { MockupCode, MockupCodeLine } from '@/components/MockupCode';

const Blog = () => {
  const [installation, setInstallation] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInstallation(true);
    }, 600);
    setTimeout(() => {
      setError(true);
    }, 2000);
  }, []);

  return (
    <main className='pt-16'>
      <MockupCode>
        <MockupCodeLine prefix='$'>npm i Blog</MockupCodeLine>
        {installation && (
          <MockupCodeLine prefix='>' className='text-warning'>
            installing...
          </MockupCodeLine>
        )}
        {error && (
          <MockupCodeLine prefix='>' className='text-error'>
            error: Blog is under construction!
          </MockupCodeLine>
        )}
      </MockupCode>
    </main>
  );
};

export default Blog;
