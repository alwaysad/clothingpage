import { NavLink } from "react-router-dom";

const MainHeader = () => {
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
              <NavLink to="/bascet">Go to Bascet</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
