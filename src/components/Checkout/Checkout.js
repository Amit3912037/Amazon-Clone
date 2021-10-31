import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom'
import db from '../../firebase';
import { ref, set } from "firebase/database";

import './Checkout.css';

const Checkout = () => {

    const history = useHistory();

    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);

    const placeOrderHandler = () => {

        const username = authCtx.userEmail.replace('.', '');
        const orderId = Math.floor(Math.random() * 1000000000000000);

        set(ref(db, `users/${username}/orders/${orderId}`), {
            date: new Date().toLocaleString("en-IN"),
            orderItems: cartCtx.cartItems,
            totalAmount: cartCtx.totalAmount,
            totalItems: cartCtx.totalItems
        });

        history.replace('/checkout-success');
        cartCtx.clearCart();
    }
    return (
        <div className='checkout__section'>
            <div className="address">
                <div className='address__heading'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='address__details'>
                    <p>{authCtx.userEmail}</p>
                    <p>122 XYZ lane</p>
                    <p>New Delhi , India</p>
                </div>
            </div>
            <div className="revieworder">
                <div className='revieworder__heading'>
                    <h3>Checkout details</h3>
                </div>
                <div className='revieworder__details'>
                    <p>Number of products: {cartCtx.totalItems}</p>
                    <h3>Order Amount: {cartCtx.totalAmount.toFixed(2)} </h3>
                    <button onClick={placeOrderHandler} className="checkout__button">Place Order </button>
                    <button onClick={() => { history.push('/cart') }} className="checkout__button">Review Cart</button>
                </div>
            </div>
        </div>)

}
export default Checkout;