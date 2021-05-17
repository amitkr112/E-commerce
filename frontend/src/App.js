import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  // IMPLEMENTING CART SYMBOL
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div><Link className="brand" to="/">amazona</Link></div>
          <div>
            <Link to="/cart">Cart
            {
                cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )
              }

            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          {/* DEfining product route for home screen */}
          {/* component which respond to that = homescreen */}
          {/* EXACT MEANS THE COMPONENT IS RENDERED ONLY IF THE PATH IS EXACTLY EQUAL TO / */}

        </main>

        <footer className="row center">
          All right reserved
  </footer>
      </div>);

    </BrowserRouter>
  )
}

export default App;
