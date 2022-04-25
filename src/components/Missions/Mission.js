import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/Missions/missions';
import './Mission.css';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <p className="mission-name-content">
          <a href={mission.wikipedia}>{mission.mission_name}</a>
        </p>
      </td>
      <td>
        <p className="desc-content">{mission.description}</p>
      </td>
      <td className="status-mission">
        <p className="status-content">{(mission.reserved && <span className="active-member">Active Memeber</span>) || (!mission.reserved && <span className="not-member">NOT A MEMBER</span>)}</p>
      </td>
      <td className="join-mission">
        <button type="button" className="join-mission-btn" onClick={() => (mission.reserved ? dispatch(leaveMission(mission.mission_id)) : dispatch(joinMission(mission.mission_id)))}>
          {(mission.reserved && <span className="leave-btn">Leave mission</span>) || (!mission.reserved && <span className="join-btn">Join Mission</span>)}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
    wikipedia: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Mission;
