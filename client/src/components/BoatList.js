const BoatList = ({boats, scuttleBoat}) => (
  <ul className="boat-list">
    {boats.map(b => (
      <li key={b.id}>
        <p>Name: {b.name}</p>
        <p>Color: {b.color}</p>
        <p>Length: {b.length}</p>
        <button onClick={() => scuttleBoat(b.id)}>Scuttle boat</button>
      </li>
    ))}
  </ul>
);

export default BoatList;