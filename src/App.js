import { Redirect, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NewItem from "./Components/NewItem";
import MainHeader from './Components/MainHeader'
import Bascet from "./Components/Bascet";
import Favourites from "./pages/Favourites";
import { Fragment } from "react";
export default function App() {
  return (
  






      <Fragment>
        <MainHeader/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/items"></Redirect>
          </Route>
          <Route path="/items" exact>
            <Items />
          </Route>
          <Route path="/ItemDetail/:itemId"></Route>
          <Route path="/newItem">
            <NewItem />
          </Route>
          <Route path="/favouriteItems">
            <Favourites />
          </Route>
          <Route path="/bascet">
            <Bascet></Bascet>
          </Route>
        </Switch>
      </main>
      </Fragment>
    
  );
}
