import React, {useState} from 'react';

const Boat = ({boat, dockBoat, docks, scuttleBoat}) => {
  const [dock, setDock] = useState('');

  const dockChosen = e => {
    e.preventDefault();
    dockBoat({boatId: boat.id, dockId: dock})
  };
  const handleChange = e => setDock(e.target.value); // sets select value
  const handleScuttle = () => scuttleBoat(boat.id);

  return (
    <div>
      <p>Name: {boat.name}</p>
      <p>Color: {boat.color}</p>
      <p>Length: {boat.length}</p>
      <form onSubmit={dockChosen}>
        <select value={dock} onChange={handleChange}>
          <option defaultValue value="">Choose dock</option>
          {docks.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
        <button disabled={!dock}>Dock boat</button>
      </form>
      <button onClick={handleScuttle}>Scuttle boat</button>
    </div>
  );
};

export default Boat;