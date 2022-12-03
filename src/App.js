
import { Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NewItem from "./Components/NewItem";

import MainHeader from "./Components/MainHeader";
import Favourites from "./pages/Favourites";
export default function App() {
  return (
    <div>
   {/* <MainHeader/> */}
    <main>
    <Switch>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/ItemDetail/:itemId"></Route>
        <Route path="/newItem">
          <NewItem />
        </Route>
        <Route path="/favouriteItems">
  <Favourites/>
        </Route>
    </Switch>
    </main>
    </div>
   
  );
}