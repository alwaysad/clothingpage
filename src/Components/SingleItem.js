import { useDispatch } from "react-redux";
import { addtoFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const SingleItem = (props) => {

  const totalQuantity=useSelector((state)=>state.favourite.totalQuantity);
  
const {name,price,id}=props;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:id,name:name,price:price}))
    
}


    return (
      <div>
    <h1>{totalQuantity}</h1>
    <li>
        <p>{props.name}</p>
        <p>{props.price}</p>
        </li>
        <button onClick={addYourFavourite}>Add to your favourite</button>
        <NavLink to="/favouriteItems">Favoriteye yolla</NavLink>
      </div>
    );
  };
  
  export default SingleItem;