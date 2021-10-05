/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import ActorCard from '../ActorsCard';

const ActorsList = () => {
  const [actorData, setActorData] = useState([]);
  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters')
      .then((response) => {
        setActorData(response.data);
        console.log('response', response.data);
      });
  }, []);
  return (
    <S.List>
      {actorData.map((actor) => (
        <ActorCard
          {...actor}
          key={actor.char_id}
        />
      ))}
    </S.List>
  );
};

export default ActorsList;
