import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const totalQuantity=useSelector(state=>state.bascet.totalQuantity);
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/favouriteItems">Your favourite page</NavLink>
            </li>
            <li>
              <NavLink to="/items">Items Page</NavLink>
            </li>
            <li>
              <NavLink to="/bascet">Go to Bascet {totalQuantity}</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
