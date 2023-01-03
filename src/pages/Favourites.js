import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBascet } from "../store/bascet-item";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { CloseCircle } from "../icons/icons";
import { removeFromFavourite } from "../store/favourite-item";

const Favourites=()=>{
    const Items=useSelector((state)=>state.favourite.items);
    const dispatch=useDispatch();
   
    
    return <div>
        {!Items.length&&<div className="flex justify-center min-h-screen items-center"><p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">There is no item in favourites</p></div>}
        {Items.length&&<div className="flex justify-center items-center bg-cyan-100 min-h-screen">
            <div className="mx-auto px-6 py-10 bg-white">
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
         
            {Items.map(item=>(
                <li className="relative flex flex-col space-y-3">
                    {/* <button </button>onClick={()=>{
                
                dispatch(removeFromFavourite(item.id));
                NotificationManager.info(`${item.name} removed from favourites `);
                setFavourite(false);
            
        }}><CloseCircle/></button> */}
            
                
                <img className="rounded-lg" src={item.image}/>
                <p className="text-2xl text-center font-bold">{item.name}</p>
                <p className="text-center font-light">{`Price: $${item.price}`}</p>
                <button onClick={()=>{
 dispatch(addToBascet({id:item.id,name:item.name,price:item.price,image:item.image}));
 NotificationManager.info(`${item.name} added to bascet `);
                }} className=" px-6 py-4 border  rounded-lg bg-black text-white hover:border-black hover:bg-white hover:text-black duration-200">Add to Cart</button>
            </li>
            ))}
         
        </ul></div></div>}

    </div>
}


export default Favourites;
