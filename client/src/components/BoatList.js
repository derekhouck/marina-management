import React, {useEffect, useState} from 'react';

const BoatList = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    if (boats.length === 0)
      fetch('/boats')
        .then(res => res.json())
        .then(data => {
          const undockedBoats = data.filter(b => b.dock_id === null)
          setBoats(undockedBoats)
        });
  }, [boats]);

  return (
    <ul className="boat-list">
      {boats.map(b => (
        <li>
          <p>Name: {b.name}</p>
          <p>Color: {b.color}</p>
          <p>Length: {b.length}</p>
        </li>
      ))}
    </ul>
  );
};

export default BoatList;