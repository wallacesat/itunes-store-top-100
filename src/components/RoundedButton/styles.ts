import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  & > button {
    overflow: hidden;
    position: relative;
    outline: none !important;

    & p,
    svg {
      z-index: 20;
    }

    &:after {
      background: #fff;
      content: '';
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 0;
    }

    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`;

export default ButtonWrapper;
