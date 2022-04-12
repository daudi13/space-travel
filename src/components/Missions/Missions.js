import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchFetchMissions } from '../../redux/Missions/missions';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dispatchFetchMissions());
  }, []);

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th className="mission-section">Mission</th>
            <th>Description</th>
            <th className="status-section">Status</th>
            <th className="join-section">.</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission mission={mission} key={mission.mission_id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
