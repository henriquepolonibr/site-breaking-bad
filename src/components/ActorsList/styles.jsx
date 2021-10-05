/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const List = styled.div`
  z-index: 1;
  position: relative;
  top: 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  width: 20rem;
  height: 40rem;
  border: solid .3125rem red;
`;
