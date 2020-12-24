import './App.css';
import React, {useEffect, useState} from 'react';
import DockTable from './components/DockTable';
import BoatList from './components/BoatList';

function App() {
  const [boats, setBoats] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    if (docks.length === 0) 
      fetch('/docks')
        .then( res => res.json())
        .then(data => setDocks(data));
  }, [docks]);

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
    <div className="App">
      <header className="App-header">
        <h1>Marina Management</h1>
      </header>
      <DockTable docks={docks} />
      <h2>Undocked Boats</h2>
      <BoatList boats={boats} />
    </div>
  );
}

export default App;
