import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../redux/dragons/dragons';

const Dragon = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.dragonData.length === 0) {
      dispatch(getDragons());
    }
  });

  const newDragons = dragons.dragonData;

  const dragonCard =  newDragons.length > 0 && newDragons.map(())

  return (
    <div className="rocket-container" />
  );
};

export default Dragon;
