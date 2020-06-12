import styled from 'styled-components';

const SourceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  top: -100%;
  height: 100%;
  width: 100%;
  background-color: rgba(147, 204, 230, 0.5);
  opacity: 0;
  height: 0;
`;

const Source = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 450px;
  border: 2px solid #008bc8;
  margin: 20px 0;
  padding: 50px 0;
  flex: auto;
  &:hover ${SourceInfo} {
    top: 0;
    -webkit-transition: all 0.7s, -webkit-transform 0.7s;
    transition: all 0.7s, transform 0.7s;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;

export { SourceInfo, Source };
