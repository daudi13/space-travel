import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../redux/dragons/dragons';
import DragonCard from './DragonCard';

const Dragon = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.dragonData.length === 0) {
      dispatch(getDragons());
    }
  });

  const newDragons = dragons.dragonData;

  const cards = newDragons.length > 0 && newDragons.map((card) => (
    <DragonCard
      key={card.id}
      id={card.id}
      image={card.image}
      name={card.name}
      desc={card.desc}
      info={card.wikipedia}
      reserved={card.reserved}
    />
  ));

  return (
    <div className="rocket-container">
      {cards}
    </div>
  );
};

export default Dragon;
