import Boat from './Boat';

const BoatList = props =>  {
  const { boats } = props;

  return (
    <ul className="boat-list">
      {boats.map(b => (
        <li key={b.id}>
          <Boat boat={b} {...props} />
        </li>
      ))}
    </ul>
  );
};

export default BoatList;