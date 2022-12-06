import { useDispatch } from "react-redux";
import { addtoFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { addToBascet } from "../store/bascet-item";


const SingleItem = (props) => {

const totalQuantity=useSelector((state)=>state.favourite.totalQuantity);
  
const {name,price}=props;
const itemId=props.id;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:itemId,name:name,price:price}))
    
}

const addYourBascet=()=>{
  dispatch(addToBascet({id:itemId,name,price}));
}

    return (
      <div>
    <li>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <img src={props.image} height="150" width="150"></img>
        </li>
        <button onClick={addYourFavourite}>Add to your favourite</button>
        <button onClick={addYourBascet}>Add to your bascet</button>
      </div>
    );
  };
  
  export default SingleItem;