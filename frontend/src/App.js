import React from 'react';
import './App.css';

// React Router Dom
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Components


// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;


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
          <Link to="/signin">Sign In</Link>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id/*" element={<CartScreen />}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
          <Route path='/' element={<HomeScreen />} exact></Route>
          <Route path='/signin' element={<SigninScreen />}></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
