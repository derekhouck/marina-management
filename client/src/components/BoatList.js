const BoatList = ({boats}) => (
  <ul className="boat-list">
    {boats.map(b => (
      <li key={b.id}>
        <p>Name: {b.name}</p>
        <p>Color: {b.color}</p>
        <p>Length: {b.length}</p>
      </li>
    ))}
  </ul>
);

export default BoatList;