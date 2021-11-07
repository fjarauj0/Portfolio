import React from 'react';

const MockupCode = ({ children, className }) => {
  return <div className={`mockup-code m-4 ${className}`}>{children}</div>;
};

const MockupCodeLine = ({ prefix, children, className }) => {
  return (
    <pre data-prefix={prefix} className={className}>
      <code>{children}</code>
    </pre>
  );
};

export { MockupCode, MockupCodeLine };
