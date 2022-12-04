import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBascet, removeFromBascet } from "../store/bascet-item";

const Bascet=()=>{
const dispatch=useDispatch();
const bascet=useSelector(state=>state.bascet);


// const addToBascetHandler=()=>{
// dispatch(addToBascet({}))
// }
// const removeFromBascetHandler=()=>{
//     dispatch(removeFromBascet())
// }
return <div>
    <ul>
        <li>
            {bascet.items.map(item=>(
                <Fragment>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={()=>{
                    dispatch(addToBascet({id:item.id,name:item.name,price:item.price}))
                }}>+</button>
                <button onClick={()=>{
                    dispatch(removeFromBascet(item.id))
                }}>-</button>
                </Fragment>
            ))}
        </li>

    </ul>

    <p>
        {bascet.bascetTotal}
    </p>
</div>


}

export default Bascet;