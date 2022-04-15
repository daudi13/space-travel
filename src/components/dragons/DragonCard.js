import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragons } from '../../redux/dragons/dragons';

const DragonCard = ({
  id, image, desc, reserved, name,
}) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => {
    dispatch(reserveDragons(id));
  };
  return (
    <div className="rocket">
      <img className="rocket--image" src={image} alt={name} />
      <div className="rocket--desc">
        <h2 className="rocket--desc__title">{name}</h2>
        <p className="rocket--desc__info">
          {reserved && <small className="reserved-badge">reserved</small>}
          {desc}
        </p>
        <button type="button" className="rocket--desc__btn" onClick={() => handleReservation(id)}>{reserved ? 'Cancel Reservation' : 'reserved Rocket' }</button>
      </div>
    </div>
  );
};

DragonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default DragonCard;
