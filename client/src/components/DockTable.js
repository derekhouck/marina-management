import React, {useEffect, useState} from 'react';

const DockTable = () => {
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    if (docks.length === 0) 
      fetch('/docks')
        .then( res => res.json())
        .then(data => setDocks(data));
  }, [docks]);

  return (
    <ol className="dock-table">
      {docks.map(d => (
        <li className={d.boat ? 'has-boat' : ''}>
          <h2>{d.name}</h2>
          <p>Boat: {d.boat ? d.boat.name : 'none'}</p>
        </li>
      ))}
    </ol>
  );
};

export default DockTable;