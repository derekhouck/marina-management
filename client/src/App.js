import './App.css';
import React, {useEffect, useState} from 'react';

import {addBoat, deleteBoat, getBoats, getDocks} from './actions';

import DockTable from './components/DockTable';
import BoatList from './components/BoatList';
import AddBoatForm from './components/AddBoatForm';

function App() {
  const [boats, setBoats] = useState([]);
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    if (docks.length === 0) 
      getDocks().then(docks => setDocks(docks));
  }, [docks]);

  useEffect(() => {
    if (boats.length === 0)
      getBoats()
        .then(boats => {
          const undockedBoats = boats.filter(b => b.dock_id === null)
          setBoats(undockedBoats)
        });
  }, [boats]);

  const boatFormSubmission = data => 
    addBoat(data)
      .then(boat => setBoats([...boats, boat]));

  const scuttleBoat = boatId => 
    deleteBoat(boatId)
      .then(() => setBoats(boats.filter(b => b.id !== boatId)));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marina Management</h1>
      </header>
      <AddBoatForm onBoatSubmission={boatFormSubmission}/>
      <DockTable docks={docks} />
      <h2>Undocked Boats</h2>
      <BoatList boats={boats} scuttleBoat={scuttleBoat} />
    </div>
  );
}

export default App;
