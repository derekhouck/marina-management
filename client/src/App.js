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
    // get docks on page load
    if (docks.length === 0) 
      getDocks().then(docks => setDocks(docks));
  }, [docks]);

  useEffect(() => {
    // get boats on page load
    if (boats.length === 0)
      getBoats()
        .then(boats => {
          // only show undocked boats
          const undockedBoats = boats.filter(b => b.dock_id === null)
          setBoats(undockedBoats)
        });
  }, [boats]);

  const boatFormSubmission = data => 
    addBoat(data)
      .then(boat => setBoats([...boats, boat])); // Add new boat to boats list
  
  const dockBoat = data => 
    updateBoat(data)
      .then(boat => {
        // update dock with boat
        setDocks(docks.map(d => {
        if (d.id === boat.dock_id)
          d.boat = boat;
        return d;
        }))
        setBoats(boats.filter(b => b.id !== boat.id)) // remove boat from boats list
    });

  const scuttleBoat = boatId => 
    deleteBoat(boatId)
      .then(() => setBoats(boats.filter(b => b.id !== boatId))); // remove boat from boats list
  
  const undockBoat = boat => 
    updateBoat({boatId: boat.id, dockId: ''}) // nullifies dock_id
      .then(() => {
        // remove boat from dock
        setDocks(docks.map(d => {
          if (d.boat && d.boat.id === boat.id)
            d.boat = null;
          return d;
        }))
        setBoats([...boats, boat]) // add boat to boats list
      });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Marina Management</h1>
      </header>
      <h2>Add a Boat</h2>
      <AddBoatForm onBoatSubmission={boatFormSubmission}/>
      <h2>The Marina</h2>
      <DockTable docks={docks} undockBoat={undockBoat} />
      <h2>Undocked Boats</h2>
      <BoatList boats={boats} docks={docks.filter(d => !d.boat)} dockBoat={dockBoat} scuttleBoat={scuttleBoat} />
    </div>
  );
}

export default App;
