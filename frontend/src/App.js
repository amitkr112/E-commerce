import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div><a className="brand" href="/">amazona</a></div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>

        <main>
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
