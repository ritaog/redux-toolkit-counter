import {useSelector, useDispatch} from 'react-redux';
import { actions } from './store/index';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const AddByTen = () => {
    dispatch(actions.addByTen(10));
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={AddByTen}>AddByTen</button>
    </div>
  );
}

export default App;
