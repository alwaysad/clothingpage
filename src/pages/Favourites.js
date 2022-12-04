import { Fragment } from "react";
import { useSelector } from "react-redux";



const Favourites=()=>{
    const Items=useSelector((state)=>state.favourite.items);
    

    return <div>


          <ul>
         <li>
            {Items.map(item=>(
                <Fragment>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </Fragment>
            ))}
         </li>
        </ul>  
        
    </div>
}


export default Favourites;