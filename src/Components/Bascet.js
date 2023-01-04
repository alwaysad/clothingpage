import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBascet, removeFromBascet } from "../store/bascet-item";

const Bascet = () => {
  const dispatch = useDispatch();
  const bascet = useSelector((state) => state.bascet);

 
  return (
    <div>
    
    {!bascet.items.length&&<div className=" flex justify-center bg-cyan-100 min-h-screen items-center"><p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Start to add items :)</p></div>
}

{bascet.items&&<div className="flex items-center justify-center bg-black min-h-screen">
  {/* Shopping card */}
<div className="mx-auto bg-white flex flex-col space-y-6 md:flex-row md:space-y-0 ">
{/* Item side */}



<div className="bg-white px-10 py-10">
<h1 className="font-bold border-b border-b pb-2 mb-3 text-3xl">BAG</h1>
<div className="flex flex-col space-y-6" >
{bascet.items.map(item=>(<div className="flex flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">

  <img src={item.image} />
  <div className="flex">
  <div className="flex flex-col w-24 space-y-3">
    <p className="font-bold">{item.name}</p>
    
  </div>
  <div className="ml-20">
  <p>{`Quantity: ${item.quantity}`}</p>
  <div className="flex space-x-2 justify-center" ><div className="w-5 h-5 hover:cursor-pointer"><svg onClick={() => {
                  dispatch(
                    addToBascet({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                    })
                  );
                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd" />
</svg>
</div>
<div className="w-5 h-5 hover:cursor-pointer">
<svg onClick={() => {
                  dispatch(removeFromBascet(item.id));
                }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
</svg>
</div>
</div>

  <p className="font-bold mt-40">{`Price: $${item.price*item.quantity}`}</p>
  </div>
  </div>

</div>))}


</div>
</div>

{/* summary side */}
<div className="flex flex-col bg-gray-200 h-full px-6 py-20 "><h3 className="text-3xl font-bold">Summary</h3>

<div className="flex flex-col space-y-4 mt-8">

<div className="flex justify-between">
  <p>Subtotal</p>
  <p>{`$${bascet.bascetTotal}`}</p>
</div>
<div className="flex justify-between">
  <p>Shipping</p>
  <p>$30</p>
</div>
<div className="flex justify-between">
  <p>Tax</p>
  <p>$35</p>
</div>

</div>
{/* checkout */}
<div className="mt-60 flex space-x-32">
  <p className="text-2xl">Total</p>
  <p className="text-2xl font-bold">{`$${bascet.bascetTotal+30+35}`}</p>
</div>
<div className="mt-6">
  <button className="w-full px-10 py-4 text-white bg-black hover:bg-white hover:text-black transition duration-200 border hover:border-black">checkout</button>
</div>



</div>

</div>
  </div>}






    {/* {bascet.items&& <ul className="flex justify-center space-y-6">
       
          {bascet.items.map((item) => (
             <li key={item.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={item.image}
                alt="Sunset in the mountains"
                width='150'
                height='150'
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">
                  Total Amount:{item.quantity}
                </p>
              </div>
              <p></p>
              <div className="flex justify-center space-x-4">
                <div>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => {
                  dispatch(
                    addToBascet({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                    })
                  );
                }}
              >
                +
              </button>
              </div>
              <div>
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                onClick={() => {
                  dispatch(removeFromBascet(item.id));
                }}
              >
                -
              </button>
              </div>
              </div>
            </div>
            </li>
          ))}
       
      </ul>}
      */}
      

      
    </div>
  );
};

export default Bascet;
