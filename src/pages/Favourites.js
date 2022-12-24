import { Fragment } from "react";
import { useSelector } from "react-redux";



const Favourites=()=>{
    const Items=useSelector((state)=>state.favourite.items);
    
    return <div>
        {!Items.length&&<div className="flex justify-center min-h-screen items-center"><p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">There is no item in favourites</p></div>}
        {Items.length&&<ul className="flex justify-center space-y-6">
         <li>
            {Items.map(item=>(
                <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" height='200' width='200' />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                </div>
            </a>
            ))}
         </li>
        </ul>}

    </div>
}


export default Favourites;
