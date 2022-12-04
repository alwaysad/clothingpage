import { useDispatch } from "react-redux";
import { addtoFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToBascet } from "../store/bascet-item";


const SingleItem = (props) => {

const totalQuantity=useSelector((state)=>state.favourite.totalQuantity);
  
const {name,price,id}=props;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:id,name:name,price:price}))
    
}

const addYourBascet=()=>{
  dispatch(addToBascet({id,name,price}));
}

    return (
      <div>
    <li>
        <p>{props.name}</p>
        <p>{props.price}</p>
        </li>
        <button onClick={addYourFavourite}>Add to your favourite</button>
        <button onClick={addYourBascet}>Add to your bascet</button>
      </div>
    );
  };
  
  export default SingleItem;