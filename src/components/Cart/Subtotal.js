import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";

import './Subtotal.css';


const Subtotal = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const history = useHistory();

    const checkoutHandler = () => {
        if (authCtx.isLoggedIn) {
            history.push('/checkout')
        }
        else {
            history.push('/login')
        }
    }
    return (
        <div className="subtotal">
            <p>Subtotal ({cartCtx.totalItems} items): <strong>{cartCtx.totalAmount.toFixed(2)}</strong> </p>
            <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
            </small>
            <button className="subtotal__button" disabled={cartCtx.totalItems === 0} onClick={checkoutHandler}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;