import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);

  const handleReservations = () => {
    if (myReserveRockets.length) {
      return myReserveRockets.map((rocket) => (
        <p key={rocket.id} className="my-rocket">{rocket.name}</p>
      ));
    }
    return <h2>No Reserved Rockets</h2>;
  };

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
          {
            handleReservations()
          }
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
