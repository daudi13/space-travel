import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myDragons = useSelector((state) => state.dragons);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);
  const myReservedDragons = myDragons.dragonData.filter((dragon) => dragon.reserved);

  const handleReservations = () => {
    if (myReserveRockets.length) {
      return myReserveRockets.map((rocket) => (
        <p key={rocket.id} className="my-rocket">{rocket.name}</p>
      ));
    }
    return <h3 className="nada">No Reserved Rockets</h3>;
  };

  const handleDragonReservation = () => {
    if (myReservedDragons.length) {
      return myReservedDragons.map((dragon) => (
        <p key={dragon.id} className="my-rocket">{dragon.name}</p>
      ));
    }
    return <h3 className="nada">No Reserved Dragons</h3>;
  };

  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="my-profile">
      <section className="my-missions-sec">
        <h2 className="my-headings">My Missions</h2>
        <div className="my-missions">
          {missions.length ? activeMissions.map((mission) => (
            <p className="my-mission" key={mission.mission_id}>
              {mission.mission_name}
            </p>
          )) : <h3 className="nada">No Booked Missions</h3>}
        </div>
      </section>
      <section className="my-rockets-sec">
        <h2 className="my-headings">My Rockets</h2>
        <div className="my-rockets">
          {
            handleReservations()
          }
        </div>
      </section>
      <section className="my-rockets-sec">
        <h2 className="my-headings">My Dragons</h2>
        <div className="my-rockets">
          {
            handleDragonReservation()
          }
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
