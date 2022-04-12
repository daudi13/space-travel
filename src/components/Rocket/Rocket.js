import React from 'react';
import RocketCard from './RocketsCard';
import './Rocket.css';

const Rocket = () => {
  const rocketData = [
    {
      id: 1,
      title: 'Falcon 1',
      desc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth',
      jpg: 'https://i.imgur.com/DaCfMsj.jpg',
      reserved: false,
    },
    {
      id: 2,
      title: 'Falcon 9',
      desc: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      jpg: 'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
      reserved: true,
    },
    {
      id: 3,
      title: 'Falcon Heavy',
      desc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth',
      jpg: 'https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg',
      reserved: false,
    },
    {
      id: 4,
      title: 'starship',
      desc: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth',
      jpg: 'https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg',
      reserved: false,
    },
  ];

  return (
    <div className="rocket-container">
      {
        rocketData.map((rocket) => (
          <RocketCard
            key={rocket.id}
            rocket={rocket}
          />
        ))
      }
    </div>
  );
};

export default Rocket;
