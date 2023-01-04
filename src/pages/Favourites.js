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
        {!Items.length&&<div className="flex justify-center bg-cyan-100  min-h-screen items-center"><p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">There is no item in favourites</p></div>}
        {Items.length&&<div className="flex justify-center items-center bg-cyan-100 min-h-screen">
            <div className="mx-auto px-6 py-10 bg-white">
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
         
            {Items.map(item=>(
                <li className="relative flex flex-col space-y-3">
    <div className="hover:cursor-pointer w-5 h-5 rounded-full absolute top-4 right-2 ">
      <svg onClick={()=>{
        dispatch(removeFromFavourite(item.id));
        NotificationManager.info(`${item.name} removed from favourites `);
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
</svg>
</div>
            
                
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
