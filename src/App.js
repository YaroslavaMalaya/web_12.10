import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Button from './components/Button';
import TO_DOS from "./mocks/todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <List></List>
        <Button title={'list'}></Button>
        <button type="button" className="btn btn-outline-primary btn-info">Toggle button from bootstrap</button>
      </header>
    </div>
  );
}

export default App;
