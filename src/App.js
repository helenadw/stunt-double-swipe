import './App.css';
import Dashboard from './Dashboard';
import mi3 from './mi3.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mi3} className="logo"></img>
        <h1 className="header-title">Position: Stunt Double</h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;