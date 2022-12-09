import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { postItem } from "../store/item-store";

const NewItem = () => {
  
const dispatch=useDispatch();
const nameRef=useRef();
const priceRef=useRef();
const stockRef=useRef();
const imageRef=useRef();



const submitHandler=(event)=>{
  event.preventDefault();
  const enteredName=nameRef.current.value;
  const enteredPrice=priceRef.current.value;
  const enteredStock=stockRef.current.value;
  const enteredImage=imageRef.current.value;


  const newItem={
   name:enteredName,
   price:parseInt(enteredPrice),
   stock:parseInt(enteredStock),
   image:enteredImage
  }

  dispatch(postItem(newItem));

}


    return (
      <Fragment>
        
<form onSubmit={submitHandler}>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" ref={nameRef} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="mb-6">
    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
    <input type="text" id="image" ref={imageRef} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
  </div>
  <div class="mb-6">
    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="number" id="price" ref={priceRef} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
  </div>
  <div class="mb-6">
    <label for="stock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
    <input type="number" id="stock" ref={stockRef} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
  </div>

  
  <button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      </Fragment>
    );
  };
  
  export default NewItem;