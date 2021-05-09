import styled from 'styled-components';

type ButtonWrapperProps = {
  hoverColor?: string;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  & > button {
    position: relative;
    white-space: nowrap;
    text-transform: lowercase;
    outline: none !important;

    &:hover {
      color: ${props => props.hoverColor || '#D2D2D2'};
    }

    &::before,
    &::after {
      position: absolute;
      width: 100%;
      height: 1px;
      background: currentColor;
      top: 90%;
      left: 0;
      pointer-events: none;
    }

    &::before {
      content: '';
      transform-origin: 100% 50%;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s;
    }

    &:hover::before {
      transform-origin: 0% 50%;
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default ButtonWrapper;
