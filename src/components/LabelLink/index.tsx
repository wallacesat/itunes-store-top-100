import * as React from 'react';

import { LabelLinkProps } from './types';
import { ButtonWrapper } from './styles';

const LabelLink: React.FC<LabelLinkProps> = ({
  children,
  className,
  textColorClass,
  hoverColor,
  onClick,
}) => {
  return (
    <ButtonWrapper hoverColor={hoverColor}>
      <button
        type="button"
        onClick={() => onClick()}
        className={`appearance-none text-sm ${className} ${
          !textColorClass ? 'text-neutral-medium' : textColorClass
        } focus:outline-none`}
      >
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default LabelLink;
