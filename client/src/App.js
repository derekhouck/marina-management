import './App.css';
import React, {useEffect, useState} from 'react';

import {addBoat, deleteBoat, getBoats, getDocks, updateBoat} from './actions';

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
  
  const dockBoat = data => 
    updateBoat(data)
      .then(boat => {
        setDocks(docks.map(d => {
        if (d.id === boat.dock_id)
          d.boat = boat;
        return d;
        }))
        setBoats(boats.filter(b => b.id !== boat.id))
    });

  const scuttleBoat = boatId => 
    deleteBoat(boatId)
      .then(() => setBoats(boats.filter(b => b.id !== boatId)));
  
  const undockBoat = boat => 
    updateBoat({boatId: boat.id, dockId: ''})
      .then(() => {
        setDocks(docks.map(d => {
          if (d.boat && d.boat.id === boat.id)
            d.boat = null;
          return d;
        }))
        setBoats([...boats, boat])
      });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marina Management</h1>
      </header>
      <AddBoatForm onBoatSubmission={boatFormSubmission}/>
      <DockTable docks={docks} undockBoat={undockBoat} />
      <h2>Undocked Boats</h2>
      <BoatList boats={boats} docks={docks.filter(d => !d.boat)} dockBoat={dockBoat} scuttleBoat={scuttleBoat} />
    </div>
  );
}

export default App;
