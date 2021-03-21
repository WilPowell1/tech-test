import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Reset from './Reset';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter 
        count={count}
        setCount={setCount}/>
      <Reset
        setCount={setCount}
      />
    </div>
  );
}

export default App;
