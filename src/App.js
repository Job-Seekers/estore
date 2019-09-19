import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/cart'
import Productlist from './components/Productlist'
import Default from './components/Default'
import Modal from './components/Modal'
import Welcome from './components/Welcome';
import CreateProd from './components/admin/CreateProd'
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/Register';
import Login from './components/Login';

import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}


function App() {
  return (

    <React.Fragment>      
      <Provider store = { store }>
    <Navbar />
  
      <Switch>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/products" component={Productlist}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/addproduct" component={CreateProd}></Route>
      <Route exact path="/register" component={ Register } />
       <Route exact path="/login" component={ Login } />
      <Route component={Default}></Route>
    </Switch>
   
    <Modal></Modal>
    </Provider>
    </React.Fragment>

  );
}

export default App;