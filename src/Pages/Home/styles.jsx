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
  top: 12rem;
  left: -150%;
  width: 230%;
  height: 250px;
  border: solid .3125rem #016936;
  display: block;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Oswald,Helvetica Neue,Arial,sans-serif;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.4;
`;

export const Subtitle = styled.h2`
  z-index: 1;
  top: 10rem;
  position: relative;
  margin-bottom: 1.5625rem;
  padding-left: 2rem;
  display: inline-flex!important;
  font-style: normal;
  width: auto;
  font-family: Oswald,Helvetica Neue,Arial,sans-serif;
  font-size: 2.856rem;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 0;
  color: inherit;
  &:after{
    position: absolute;
    top: 0.725rem;
    left: 0;
    width: 0.725rem;
    height: 2.45rem;
    content: '';
    color: #016936;
    background-color: #016936;
  }
`;
