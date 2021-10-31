import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import './ProductItem.css'

export default function ProductItem(props) {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.image,
        }
        cartCtx.addItem(item);
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.rating).fill().map((_, i) => (
                        <p key={Math.random()}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={props.image} alt="product-img"></img>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    )
}
