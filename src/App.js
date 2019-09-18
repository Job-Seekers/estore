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
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (

    <React.Fragment>      
    <Navbar />
  
      <Switch>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/products" component={Productlist}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/addproduct" component={CreateProd}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route component={Default}></Route>
    </Switch>
   
    <Modal></Modal>
    </React.Fragment>

  );
}

export default App;