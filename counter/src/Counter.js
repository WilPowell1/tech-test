import React from 'react';

const Counter = ({ count, setCount }) => {

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

return (
    <div>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
    )
}

  export default Counter;