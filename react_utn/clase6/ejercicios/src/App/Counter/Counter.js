import React from 'react';

const Counter = ({value, that, num}) => (
  <div className="counter">
    <button onClick={() => that.increase()}>+</button>
    <div>{value[num]}</div>
    <button onClick={() => that.decrease()}>-</button>
  </div>
);

export default Counter;