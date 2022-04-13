import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myReserveRockets = myRockets.rocketsData.filter((rocket) => rocket.reserved);

  return (
    <div className="my-profile">
      <section className="my-missions-sec">
        <h2 className="my-headings">My Missions</h2>
        <div className="my-missions">
          <p className="my-mission">Telstar</p>
          <p className="my-mission">SES</p>
          <p className="my-mission">AsiaSat</p>
          <p className="my-mission">SO50</p>
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
