import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
  const [count, setCount] = useState(35);
  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => setCount(count-1);
  return(
    <div>
      <h1>Start Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;


// const increaseCount = () =>{
//   const newCount = count+1;
//   setCount(newCount);
// }
