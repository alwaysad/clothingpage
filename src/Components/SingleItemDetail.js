import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoFavourite, removeFromFavourite} from "../store/favourite-item";

import { addToBascet } from "../store/bascet-item";

import { NotificationManager } from "react-notifications";





const SingleItemDetail=(props)=>{
    const {name,description,stock,image,price,id}=props;
    const dispatch=useDispatch();
    const [saved,setSaved]=useState(false);
    const fillColour=saved?'red':'none';
    const addYourFavourite=()=>{

        dispatch(addtoFavourite({id:id,name:name,price:price,image:image,description:description}))
        setSaved(true);
        NotificationManager.info(`${name} added to favourite `);
          
      }
      
      const addYourBascet=()=>{
        dispatch(addToBascet({id:id,name,price,image}));
        NotificationManager.info(`${name} added to bascet `);
        
      }
      const removeFromFavouriteHandler=()=>{
        dispatch(removeFromFavourite(id));
        NotificationManager.info(`${name} removed from favourites `);
        setSaved(false);
    }

    console.log(name);

    return <Fragment>
        
        <div className="flex items-center justify-center bg-gray-200 min-h-screen">
         <div className="flex bg-white rounded-lg shadow-xl flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:pl-0 px-16 py-10">
            <img src={image} className="h-80 object-contain"/>
            <div className="flex relative flex-col space-y-4 text-center md:text-left">
            <h3 className=" font-bold text-3xl ">{name}</h3>
            <p className="">{`Stock: ${stock}`}</p>
            <p className="text-2xl font-light">Product info</p>
            <p className="max-w-xs">{description}</p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4  md:space-y-0">
                <button onClick={addYourBascet} className=" px-6 py-4 border border-black rounded-lg bg-white text-black">Add to Cart</button>
             {!saved&&<button onClick={addYourFavourite}  className="flex items-center px-6 py-4 border border-black justify-center rounded-lg bg-white text-black "><svg xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</button>}
{saved&&<button onClick={removeFromFavouriteHandler}  className="flex items-center px-6 py-4 border border-black justify-center rounded-lg bg-white text-black "><svg xmlns="http://www.w3.org/2000/svg" fill='red' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</button>}   
            </div>
            </div>
         </div>
        </div>
    </Fragment>
}

export default SingleItemDetail;