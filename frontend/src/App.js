import React from 'react';
import './App.css';

// React Router Dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components


// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazonia</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/cart/:id/*" element={<CartScreen />}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
          <Route path='/' element={<HomeScreen />} exact></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
