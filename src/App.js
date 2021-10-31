import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Login from './components/Authentication/Login';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import CartContext from './store/cart-context';
import CheckoutSuccess from './components/Checkout/CheckoutSuccess';

function App() {

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/' exact >
          <Home />
        </Route>

        {
          !authCtx.isLoggedIn && (
            <Route path='/login' exact >
              <Login />
            </Route>)
        }

        <Route path='/cart'>
          <Cart />
        </Route>

        {
          cartCtx.totalItems > 0 && (
            <Route path='/checkout'>
              <Checkout />
            </Route>)
        }

        <Route path='/orders'>
          {authCtx.isLoggedIn && <Orders />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>

        <Route path='/checkout-success'>
          <CheckoutSuccess />
        </Route>

        <Route path="*">
          <Redirect to='/' />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
