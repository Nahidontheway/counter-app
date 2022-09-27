import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      </header>
    </div>
  );
}

function Counter(){
  return(
    <div>
      <h1>Start Count</h1>
      <button>Increase</button>
      <button>Decrease</button>
    </div>
  )
}

export default App;
