import { useDispatch } from "react-redux";
import { addtoFavourite } from "../store/favourite-item";
import { useSelector } from "react-redux";
import { addToBascet } from "../store/bascet-item";


const SingleItem = (props) => {

  
const {name,price,image}=props;
const itemId=props.id;

const dispatch=useDispatch();

const addYourFavourite=()=>{

  dispatch(addtoFavourite({id:itemId,name:name,price:price,image:image}))
    
}

const addYourBascet=()=>{
  dispatch(addToBascet({id:itemId,name,price,image}));
}

    return (
    <div>
    <li>
<section class="content-center flex justify-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={props.image} alt=""  />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
        </div>
        <div className="flex space-x-4 justify-between">
            <div >
        <button onClick={addYourFavourite} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to favourite
        </button>
        </div>
        <div>
        <button onClick={addYourBascet} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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