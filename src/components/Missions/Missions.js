import React from 'react';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const missions = [
    {
      mission_name: 'Appolo',
      mission_id: 1,
      description: 'description here',
    },
    {
      mission_name: 'Appolo',
      mission_id: 1,
      description: 'description here',
    },
    {
      mission_name: 'Appolo',
      mission_id: 1,
      description: 'description here',
    },
    {
      mission_name: 'Appolo',
      mission_id: 1,
      description: 'description here',
    },
  ];

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
