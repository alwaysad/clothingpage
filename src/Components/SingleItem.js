import { useDispatch } from "react-redux";
import { addtoFavourite, removeFromFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { addToBascet } from "../store/bascet-item";
import { useState } from "react";


const SingleItem = (props) => {
const [favourite,setFavourite]=useState(false);

const saved=useSelector(state=>state.favourite.saved);

  
const {name,price,image,description}=props;
const itemId=props.id;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:itemId,name:name,price:price,image:image,description:description}))
  setFavourite(true);
    
}

const addYourBascet=()=>{
  dispatch(addToBascet({id:itemId,name,price,image}));
  

}

const removeFromFavouriteHandler=()=>{
    dispatch(removeFromFavourite(itemId));
    setFavourite(false);
}


    return (
    <div>
    <li>
<section className="content-center flex justify-center">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={props.image} alt=""  />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
        </div>
        <div className="flex space-x-4 justify-between">
            <div >
       {!favourite&&<button onClick={addYourFavourite} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to favourite
        </button>}
        {favourite&&<button onClick={removeFromFavouriteHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            remove from favourite
        </button>} 
        </div>
        <div>
        <button onClick={addYourBascet} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to bascet
           
        </button>
        </div>
        </div>
    </div>
</div>
</section>
</li>
</div>
    );
  };
  
  export default SingleItem;