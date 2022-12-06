import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../store/auth-slice";

const MainHeader = () => {
  const dispatch=useDispatch();
  const totalQuantity=useSelector(state=>state.bascet.totalQuantity);
  const loggedIn=useSelector(state=>state.auth.isLoggedIn);
  
  const logOutHandler=()=>{
    dispatch(logOut());
  }

  
  return (
    <div>
      <header>
        <nav>
          <ul> 
            {!loggedIn&& <li>
              <NavLink className="text3xl font-bold underline" to="/auth">Login page</NavLink>
            </li>}
         {loggedIn&& <li>
              <NavLink className="text3xl font-bold underline" to="/favouriteItems">Your favourite page</NavLink>
            </li>}
           {loggedIn&& <li>
              <NavLink to="/items">Items Page</NavLink>
            </li>}
           {loggedIn&& <li>
              <NavLink to="/bascet">Go to Bascet {totalQuantity}</NavLink>
            </li>}
           {loggedIn&& <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>}
           
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
