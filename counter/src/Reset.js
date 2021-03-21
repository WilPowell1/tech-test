import React from 'react';

const Reset = ({ setCount }) => {

  const reboot = () => {
    setCount(0);
  }

return (
    <div>
        <button onClick={reboot}>Reset</button>
    </div>
    )
}

  export default Reset;