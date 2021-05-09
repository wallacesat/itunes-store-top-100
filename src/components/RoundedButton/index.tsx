import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Label from '../Label';
import { RoundedButtonProps } from './types';
import { ButtonWrapper } from './styles';

const RoundedButton: React.FC<RoundedButtonProps> = ({
  onClick,
  buttonClass,
  iconClass,
  labelClass,
  icon,
  iconSize,
  label,
}) => {
  return (
    <ButtonWrapper>
      <button
        type="button"
        onClick={() => onClick()}
        className={`appearance-none flex bg-info rounded-full py-1 ${
          icon ? 'pl-2 pr-4' : 'px-3'
        } items-center cursor-pointer focus:outline-none ${buttonClass}`}
      >
        {icon && (
          <div>
            <FontAwesomeIcon
              icon={icon}
              size={iconSize}
              className={`text-neutral-light mr-3 ${iconClass}`}
            />
          </div>
        )}
        <Label className={labelClass}>{label}</Label>
      </button>
    </ButtonWrapper>
  );
};

export default RoundedButton;
