import { useState } from 'react';
import classes from './Counter.module.scss';

function Counter() {

  const [counter, setCounter] = useState(0)
  const increment = () =>{
    setCounter(counter + 1)
  }


  return (
    <div className={classes.button}>
      <div>
        {counter}
      </div>
        <button onClick={increment}>
          increment
        </button>
    </div>
  );
}

export default Counter;