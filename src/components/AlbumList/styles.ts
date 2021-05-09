import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'rounded-lg overflow-hidden',
})`
  height: calc(100vh - 200px);
  & > div.album-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow-y: auto;
  }
`;
export default Container;
