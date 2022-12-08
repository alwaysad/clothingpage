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
    //   <div>
    // <li>
    //     <p>{props.name}</p>
    //     <p>{props.price}</p>
    //     <img src={props.image} height="150" width="150"></img>
    //     </li>
    //     <button onClick={addYourFavourite}>Add to your favourite</button>
    //     <button onClick={addYourBascet}>Add to your bascet</button>
    //   </div>
<section class="content-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={props.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.price}</p>
        <button onClick={addYourFavourite} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to favourite
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <button onClick={addYourBascet} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to bascet
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>
</section>
    );
  };
  
  export default SingleItem;