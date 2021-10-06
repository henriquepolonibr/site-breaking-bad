/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ActorCard = styled.div`
  width: 40rem;
  height: 40rem;
  margin: 2rem 2rem;
`;

export const CardImg = styled.img`
  width: 20rem;
  height: 30rem;
  border: solid .1rem white;
  position: relative;
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  color: white;
  position: relative;
  left: 21rem;
  top: -20rem;
`;

export const CardDescription = styled.div`
  font-size: 1.5rem;
  color: white;
  position: relative;
  left: 21rem;
  top: -18rem;
`;

export const CardText = styled.div`
  color: white;
  padding: 0.7rem 0;
`;

export const LineThrough = styled.div`
  text-decoration: line-through;
`;
