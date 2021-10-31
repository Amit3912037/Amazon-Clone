import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useHistory } from 'react-router-dom'
import Subtotal from "./Subtotal";

import './Cart.css';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const history = useHistory();

    return (
        <div className="cart">
            <div className="cart__left">
                <img className="cart__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {cartCtx.totalItems > 0 ? <div className="cart__title">
                    <h2>Your Shopping Cart</h2>
                    <span className="cart__link" onClick={cartCtx.clearCart}>Remove all items</span>
                </div> :
                    <div>
                        <h2>Your cart is empty</h2>
                        <span className="cart__link" onClick={() => { history.push('/') }} >Explore products</span>
                    </div>
                }
                {
                    cartCtx.cartItems && cartCtx.cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            id={cartItem.id}
                            image={cartItem.image}
                            price={cartItem.price}
                            rating={cartItem.rating}
                            title={cartItem.title}
                        />
                    ))
                }
            </div>
            <div className="cart_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Cart;