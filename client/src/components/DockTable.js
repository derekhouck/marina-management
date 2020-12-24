const DockTable = ({docks}) => (
    <ol className="dock-table">
      {docks.map(d => (
        <li className={d.boat ? 'has-boat' : ''} key={d.id}>
          <h2>{d.name}</h2>
          <p>Boat: {d.boat ? d.boat.name : 'none'}</p>
        </li>
      ))}
    </ol>
  );

export default DockTable;