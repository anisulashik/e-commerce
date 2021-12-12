import './App.css';
import Header from './Header';
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import React,{ useEffect } from 'react';
import { auth } from './fireabase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// const promise = loadStripe("pk_test_51K5X2yK93NNAxaRTw2zkFBqO736rCZJvaYYU1mejlLPeN931r0aR1GSiwndjkUiJlbsijtT3Hv3nMsXb0in6GFaJ0058JFNyIy");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router> 
    <div className="App">
      <Switch> 
      <Route path ="/login"> 
         <Login/>
        </Route>
      <Route path ="/checkout"> 
          <Header> </Header>
          <Checkout/>
      </Route>
      <Route path="/payment"> 
          <Header> </Header>
          <Payment> </Payment>
      </Route>
      <Route path ="/"> 
          <Header> </Header>
          <Home> </Home>
       </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
