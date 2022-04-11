import Mission from './Mission';
import generateId from './generateId';
import './Missions.css';

const Missions = () => {
  const test = [
    {
      name: 'Apolo',
      description: 'The first rocket to go out of the earth',
      member: false,
      joined: true,
    },
    {
      name: 'Apolo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae delectus esse, rerum porro alias sapiente reiciendis doloremque sit tempora sint officiis maiores aliquam ab laudantium! Deleniti, sint! Culpa, in.',
      member: false,
      joined: true,
    },
    {
      name: 'Apolo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae delectus esse, rerum porro alias sapienteCulpa, in.',
      member: false,
      joined: true,
    },
    {
      name: 'Apolo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit. Facere, quae delectus esse, rerum porro alias sapiente reiciendis doloremque sit tempora sint officiis maiores aliquam ab laudantium! Deleniti, sint! Culpa, in.',
      member: true,
      joined: true,
    },
    {
      name: 'Apolo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae delectus esse, rerum porro alias sapiente reiciete reiciendis doloremque sit tempora sint officiis maiores aliquam ab laudantium! Deleniti, sint! Culpa, in.',
      member: false,
      joined: true,
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
          {test.map((item) => (
            <Mission mission={item} key={generateId()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
