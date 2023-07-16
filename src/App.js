
import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="logo" alt="logo"/>
        <p className='blurb'>
          <h3>Colorado Collegiate Rentals</h3>
          Blurb
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
