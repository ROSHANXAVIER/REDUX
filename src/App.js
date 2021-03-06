import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "./action"
import Counters from "./components/counter";
import Cent from "./components/cent";
const App = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>CrowdOverflow</h3>
      <h2>Counter : {counter} </h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <Counters/>
      <Cent/>
    </div>
  );
};

export default App;
