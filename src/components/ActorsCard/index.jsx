/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import * as S from './styles';

const ActorsCard = (params) => {
  const elements = params.appearance;
  const itemsAppearance = [];

  for (const [index, value] of elements.entries()) {
    itemsAppearance.push(
      <span key={index}>
        {value}
        {'. '}
      </span>,
    );
  }
  return (
    <S.ActorCard key={params.char_id}>
      <S.CardImg src={params.img} />
      <S.CardTitle>{params.name}</S.CardTitle>
      <S.CardDescription>
        <S.CardText>{params.occupation[0]}</S.CardText>
        <S.CardText>
          {
            (params.status === 'Deceased')
              ? <S.LineThrough> Dead </S.LineThrough>
              : params.status
          }
        </S.CardText>
        <S.CardText>
          Nickname:
          {' '}
          {params.nickname}
        </S.CardText>
        <S.CardText>
          Appearance:
          {' '}
          {itemsAppearance}
        </S.CardText>
        <S.CardText>
          Actor:
          {' '}
          {params.portrayed}
        </S.CardText>
      </S.CardDescription>
    </S.ActorCard>
  );
};

export default ActorsCard;
