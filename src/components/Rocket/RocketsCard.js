import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => (
  <div className="rocket">
    <img className="rocket--image" src={rocket.jpg} alt={rocket.title} />
    <div className="rocket--desc">
      <h2 className="rocket--desc__title">{rocket.title}</h2>
      <p className="rocket--desc__info">
        {rocket.reserved && <small className="reserved-badge">reserved</small>}
        {rocket.desc}
      </p>
      <button type="button" className="rocket--desc__btn">{rocket.reserved ? 'Cancel Reservation' : 'reserved Rocket' }</button>
    </div>
  </div>
);

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    title: PropTypes.string.isRequired,
    jpg: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketCard;
