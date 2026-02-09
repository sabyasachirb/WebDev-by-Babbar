import { useDispatch, useSelector  } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [cnt, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement(){
    dispatch(increment());
  }
  function handleDecrement(){
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
  function handleIncreasebyamnt(){
    dispatch(incrementByAmount(cnt));
  }
  return (
   <div>
    <button onClick={handleIncrement}>+</button>
    <p>Count:{count} </p>
    <button onClick={handleDecrement}>-</button>
    <br/><br/>
    <button onClick={handleReset}>Reset</button>
    <br/><br/>
    <input type='text'  placeholder='Enter the amount' onChange={(e)=> setAmount(Number(e.target.value))}></input>
    <button onClick={handleIncreasebyamnt}>Increase By this amnt</button>
   </div>
  )
}

export default App
