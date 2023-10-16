import logo from './logo.svg';
import './App.css';
import List from './components/List';

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
        
        <button>Submit</button>
        <List list={['er', 'errer', 'weeee']}></List>
        <button type="button" className="btn btn-outline-primary btn-info">Toggle button from bootstrap</button>
      </header>
    </div>
  );
}

export default App;
