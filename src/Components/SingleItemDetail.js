import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addtoFavourite} from "../store/favourite-item";

import { addToBascet } from "../store/bascet-item";

import { NotificationManager } from "react-notifications";





const SingleItemDetail=(props)=>{
    const {name,description,stock,image,price,id}=props;
    const dispatch=useDispatch();
    const addYourFavourite=()=>{

        dispatch(addtoFavourite({id:id,name:name,price:price,image:image,description:description}))
        
        NotificationManager.info(`${name} added to favourite `);
          
      }
      
      const addYourBascet=()=>{
        dispatch(addToBascet({id:id,name,price,image}));
        NotificationManager.info(`${name} added to bascet `);
      
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
            <div className="flex  flex-col space-y-4 md:flex-row md:space-x-4  md:space-y-0">
                <button onClick={addYourBascet} className=" px-6 py-4 border  rounded-lg bg-black text-white hover:border-black hover:bg-white hover:text-black duration-200">Add to Cart</button>
                <button onClick={addYourFavourite}  className=" px-6 py-4 border  rounded-lg bg-black text-white hover:border-black hover:bg-white hover:text-black duration-200">Add to Favourite</button>
            </div>
            </div>
         </div>
        </div>
    </Fragment>
}

export default SingleItemDetail;