import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="my-profile">
      <section className="my-missions-sec">
        <h2 className="my-headings">My Missions</h2>
        <div className="my-missions">
          {activeMissions.map((mission) => (
            <p className="my-mission" key={mission.mission_id}>
              {mission.mission_name}
            </p>
          ))}
        </div>
      </section>
      <section className="my-rockets-sec">
        <h2 className="my-headings">My Missions</h2>
        <div className="my-rockets">
          <p className="my-rocket">Falcon9</p>
          <p className="my-rocket">Falcon</p>
          <p className="my-rocket">Starship</p>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
