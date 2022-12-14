import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBascet, removeFromBascet } from "../store/bascet-item";

const Bascet = () => {
  const dispatch = useDispatch();
  const bascet = useSelector((state) => state.bascet);

 
  return (
    <div>
     <h1> {bascet.totalQuantity!==0&&<p>Total price: {bascet.bascetTotal}</p>}</h1>
    {!bascet.items.length&&<div className=" flex justify-center content-center"><p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">Start to add items :)</p></div>
}
    {bascet.items&& <ul className="flex justify-center space-y-6">
        <li>
          {bascet.items.map((item) => (
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
          ))}
        </li>
      </ul>}
     
      

      
    </div>
  );
};

export default Bascet;
