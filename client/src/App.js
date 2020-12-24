import './App.css';
import DockTable from './components/DockTable';
import BoatList from './components/BoatList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marina Management</h1>
      </header>
      <DockTable />
      <h2>Undocked Boats</h2>
      <BoatList />
    </div>
  );
}

export default App;
