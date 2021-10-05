/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (min-width: 768px){
    padding: 50px;
  }
`;

export const GreenRectangleStyle = styled.div`
  position: absolute;
    z-index: 0;
    top: 100px;
    left: -150%;
    width: 230%;
    height: 250px;
    border: solid .3125rem #016936;;
    display: block;
`;
