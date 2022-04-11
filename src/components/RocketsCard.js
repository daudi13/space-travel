/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({
  title, desc, jpg, reserved,
}) => (
  <div className="rocket">
    <image scr={jpg} alt="rocker" />
    <div className="rocket--desc">
      <h2 className="rocket--desc__title">{title}</h2>
      <p className="rocket--desc__info">
        {desc}
      </p>
      <button type="button">{reserved ? 'reserved Rocket' : 'Cancel Reservation'}</button>
    </div>
  </div>
);

RocketCard.prototypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default RocketCard;
