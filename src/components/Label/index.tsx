import * as React from 'react';

import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({ children, className }) => {
  return (
    <p className={`text-sm text-neutral-medium ${className}`}>{children}</p>
  );
};

export default Label;
