import * as React from 'react';

import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({
  children,
  className,
  textColorClass,
}) => {
  return (
    <p
      className={`text-sm ${className} ${
        !textColorClass ? 'text-neutral-medium' : textColorClass
      }`}
    >
      {children}
    </p>
  );
};

export default Label;
