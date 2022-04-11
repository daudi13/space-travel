/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({
  title, desc, jpg, reserved,
}) => (
  <div className="rocket">
    <img className="rocket--image" src={jpg} alt={title} />
    <div className="rocket--desc">
      <h2 className="rocket--desc__title">{title}</h2>
      <p className="rocket--desc__info">
        {reserved && <span className="reserved-badge">reserved</span>}
        {desc}
      </p>
      <button type="button" className="rocket--desc__btn">{reserved ? 'Cancel Reservation' : 'reserved Rocket' }</button>
    </div>
  </div>
);

RocketCard.prototypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default RocketCard;
