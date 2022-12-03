import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink>Your favourite page</NavLink>
          </li>
          <li>
            <NavLink>Items Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
