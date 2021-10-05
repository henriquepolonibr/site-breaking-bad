/* eslint-disable react/destructuring-assignment */
import React from 'react';
import * as S from './styles';

const ActorsCard = (params) => (
  <>
    <S.ActorCard>
      <S.CardImg src={params.img} />
      <S.CardTitle>{params.name}</S.CardTitle>
      <S.CardDescription>
        <S.CardText>{params.occupation[0]}</S.CardText>
        <S.CardText>{params.status}</S.CardText>
        <S.CardText>
          Nickname:
          {params.nickname}
        </S.CardText>
        <S.CardText>
          Appearance:
          {params.appearance}
        </S.CardText>
        <S.CardText>
          Actor:
          {params.portrayed}
        </S.CardText>
      </S.CardDescription>
    </S.ActorCard>
  </>
);

export default ActorsCard;
