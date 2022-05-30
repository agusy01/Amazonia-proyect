import React from 'react';
import './App.css';

// React Router Dom
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Components


// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">amazonia</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (
            <span className='badge'>{cartItems.length}</span>
          )}
          </Link>
          {
            userInfo ? (
              <div className='dropdown'>
                <Link to="#">
                  {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
                </Link>
                <ul className='dropdown-content'>
                  <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )
          }
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id/*" element={<CartScreen />}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
          <Route path='/' element={<HomeScreen />} exact></Route>
          <Route path='/signin' element={<SigninScreen />}></Route>
          <Route path='/register' element={<RegisterScreen />}></Route>
          <Route path='/shipping' element={<ShippingAddressScreen />}></Route>
          <Route path='/payment' element={<PaymentMethodScreen />}></Route>
          <Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
