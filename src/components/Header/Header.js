import React, { useContext, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useHistory } from "react-router-dom";
import CartContext from '../../store/cart-context'
import AuthContext from "../../store/auth-context";

import './Header.css';
import headerLogo from "../../images/header-logo.png";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const totalItems = cartCtx.totalItems;
  const [applyAnimation, setApplyAnimation] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (totalItems === 0) {
      return;
    }
    setApplyAnimation(true);

    const timer = setTimeout(() => {
      setApplyAnimation(false);

    }, 300);

    return () => {
      clearTimeout(timer);

    }


  }, [totalItems])

  const signInSignOutHandler = () => {
    if (isLoggedIn) {
      authCtx.logout();
      history.replace('/');
    } else {
      history.push('/login')
    }
  }


  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={headerLogo}
          alt="amazon-logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div onClick={signInSignOutHandler} className="header__option">
        <span className="header__optionLineOne">{isLoggedIn ? authCtx.userEmail : "Sign up /"}</span>
        <span className="header__optionLineTwo">{isLoggedIn ? "Sign out" : "Sign in"}</span>
      </div>
      <Link style={{ textDecoration: 'none' }} to={`${authCtx.isLoggedIn ? "/orders" : "/login"}`}>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/cart">
        <div className="header__option">
          <div className={`header__cart  ${applyAnimation ? "bump" : ''}`}>
            <ShoppingCartOutlinedIcon />
            <span className="cart__count">
              {totalItems}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
