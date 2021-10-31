import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import './CartItem.css';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = () => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.image,
            rating: props.rating
        }
        cartCtx.addItem(item);
    }
    const removeItemFromCartHandler = () => {
        cartCtx.removeItem(props.id);
    }

    return <div className="cartitem">
        <img src={props.image} alt="" className="cartitem__image" />
        <div className="cartitem__info">
            <div className="cartitem__head">
                <div className="cartitem__left">
                    <p className="cartitem__title">{props.title}</p>
                    <span className='cartitem__quantity'>Quantity: {cartCtx.cartItems.filter(cartItem => cartItem.id === props.id)[0].quantity}</span>
                    <button onClick={removeItemFromCartHandler}>-</button>
                    <button onClick={addItemToCartHandler}>+</button>
                </div>
                <div className="cartitem__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem;