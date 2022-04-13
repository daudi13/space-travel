import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets/Rockets';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReservation = (id) => (
    dispatch(reserveRocket(id))
  );

  return (
    <div className="rocket">
      <img className="rocket--image" src={rocket.image} alt={rocket.name} />
      <div className="rocket--desc">
        <h2 className="rocket--desc__title">{rocket.name}</h2>
        <p className="rocket--desc__info">
          {rocket.reserved && <small className="reserved-badge">reserved</small>}
          {rocket.desc}
        </p>
        <button type="button" className="rocket--desc__btn" onClick={() => handleReservation(rocket.id)}>{rocket.reserved ? 'Cancel Reservation' : 'reserved Rocket' }</button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketCard;
