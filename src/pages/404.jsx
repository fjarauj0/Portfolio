import React, { useState, useEffect } from 'react';
import { MockupCode, MockupCodeLine } from '@/components/MockupCode';

const NotFound = () => {
  const [installation, setInstallation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInstallation(true);
    }, 600);
  }, []);

  return (
    <main className='pt-16'>
      <MockupCode>
        <MockupCodeLine prefix='>' className='text-warning'>
          installing...
        </MockupCodeLine>
        {installation && (
          <MockupCodeLine prefix='>' className='text-error'>
            error: Page Not Found!
          </MockupCodeLine>
        )}
      </MockupCode>
    </main>
  );
};

export default NotFound;
