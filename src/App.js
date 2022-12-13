import { Redirect, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NewItem from "./Components/NewItem";
import MainHeader from './Components/MainHeader'
import Bascet from "./Components/Bascet";
import Favourites from "./pages/Favourites";
import { Fragment } from "react";
import Auth from "./pages/Auth";
import { useSelector } from "react-redux";
import Layout from "./Components/Layout";

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';



export default function App() {

  const loggedIn=useSelector(state=>state.auth.isLoggedIn);

  return (
      <Layout>
        <MainHeader/>
      <main>
        <Switch>
          
          <Route path="/" exact>
            <Redirect to="/items"></Redirect>
          </Route>
          <Route path="/items" exact>
            {loggedIn&&<Items />}
            {!loggedIn&&<Redirect to='/auth'></Redirect>}
            
          </Route>
          <Route path="/ItemDetail/:itemId"></Route>
          <Route path="/newItem">
            {loggedIn&&<NewItem />}
            {!loggedIn&&<Redirect to='/auth'></Redirect>}
            
          </Route>
          <Route path="/favouriteItems">
            {loggedIn&&<Favourites />}
            {!loggedIn&&<Redirect to='/auth'></Redirect>}
            
          </Route>
          <Route path="/bascet">
            {loggedIn&&<Bascet />}
            {!loggedIn&&<Redirect to='/auth'></Redirect>}
           
            </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          
        </Switch>
      </main>
      <NotificationContainer/>
      </Layout>
    
  );
}
