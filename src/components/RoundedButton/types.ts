import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface RoundedButtonProps {
  onClick?: () => void;
  buttonClass?: string;
  iconClass?: string;
  labelClass?: string;
  icon?: IconProp;
  iconSize?: SizeProp;
  label: string;
}
