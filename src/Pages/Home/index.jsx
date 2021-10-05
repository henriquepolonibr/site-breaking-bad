import React from 'react';
import * as S from './styles';
import ActorsList from '../../components/ActorsList';

const Home = () => (
  <S.Wrapper>
    <S.Title>BREAKING BAD</S.Title>
    <S.GreenRectangleStyle />
    <S.Subtitle>ATORES</S.Subtitle>
    <ActorsList />
  </S.Wrapper>
);

export default Home;
