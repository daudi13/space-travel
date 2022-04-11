import React from 'react';
import PropTypes from 'prop-types';
import './Mission.css';

const Mission = ({ mission }) => (
  <tr>
    <td>
      <p className="mission-name-content">{mission.name}</p>
    </td>
    <td>
      <p className="desc-content">{mission.description}</p>
    </td>
    <td className="status-mission">
      <p className="status-content">{mission.member ? 'Active Member' : 'NOT A MEMBER'}</p>
    </td>
    <td className="join-mission">
      <button type="button" className="join-mission-btn">
        Join Mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    member: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
