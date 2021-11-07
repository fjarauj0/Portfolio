import React, { useState, useEffect } from 'react';
import { MockupCode, MockupCodeLine } from '@/components/MockupCode';

const About = () => {
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
    <main className='pt-16 max-w-screen-2xl mx-auto w-full'>
      <MockupCode>
        <MockupCodeLine prefix='$'>npm i About...</MockupCodeLine>
        {installation && (
          <MockupCodeLine prefix='>' className='text-warning'>
            installing...
          </MockupCodeLine>
        )}
        {error && (
          <MockupCodeLine prefix='>' className='text-error'>
            error: About is under construction!
          </MockupCodeLine>
        )}
      </MockupCode>
    </main>
  );
};

export default About;
