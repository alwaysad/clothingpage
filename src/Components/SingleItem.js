const SingleItem = (props) => {

const addYourFavourite=()=>{
    
}


    return (
      <div>
    <li>
        <p>{props.name}</p>
        <p>{props.price}</p>
        </li>
        <button onClick={addYourFavourite}>Add to your favourite</button>
      </div>
    );
  };
  
  export default SingleItem;