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
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  onClick={()=>{
                    dispatch(addToBascet({id:item.id,name:item.name,price:item.price}))
                }}>+</button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={()=>{
                    dispatch(removeFromBascet(item.id))
                }}>-</button>
                </Fragment>
            ))}
        </li>

    </ul>

    <p>
       Total amount: {bascet.bascetTotal}
    </p>
</div>


}

export default Bascet;