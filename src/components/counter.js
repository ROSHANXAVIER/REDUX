import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "../action"
const Counters = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>CrowdOverflow</h3>
      <h2>Counter : {counter} </h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      
    </div>
  );
};

export default Counters;

