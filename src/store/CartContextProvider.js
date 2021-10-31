import { useReducer } from "react";
import CartContext from "./cart-context";

let defaultCartState = JSON.parse(localStorage.getItem('cart'));
if (!defaultCartState) {
    defaultCartState = {
        cartItems: [],
        totalAmount: 0,
        totalItems: 0
    }
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {

        const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.item.id);

        let updatedCartItems;
        if (existingItemIndex === -1) {
            const updatedItem = {
                ...action.item,
                quantity: 1
            }
            updatedCartItems = state.cartItems.concat(updatedItem);
        }
        else {
            const existingItem = state.cartItems[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
            updatedCartItems = [...state.cartItems]
            updatedCartItems[existingItemIndex] = updatedItem;
        }
        const updatedCart = {
            cartItems: updatedCartItems,
            totalAmount: +state.totalAmount + action.item.price,
            totalItems: state.totalItems + 1
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    }
    if (action.type === "REMOVE") {

        const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.id);

        const existingItem = state.cartItems[existingItemIndex];
        const updatedTotalAmount = +state.totalAmount - existingItem.price;
        const updatedTotalItems = state.totalItems - 1;
        let updatedCartItems;

        if (existingItem.quantity === 1) {
            updatedCartItems = state.cartItems.filter((cartitem) => cartitem.id !== existingItem.id);
        }
        else {
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            }
            updatedCartItems = [...state.cartItems]
            updatedCartItems[existingItemIndex] = updatedItem;
        }
        const updatedCart = {
            cartItems: updatedCartItems,
            totalAmount: Math.abs(updatedTotalAmount),
            totalItems: updatedTotalItems
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    }
    if (action.type === "CLEAR") {
        localStorage.removeItem('cart');
        return {
            cartItems: [],
            totalAmount: 0,
            totalItems: 0
        };
    }
    return defaultCartState;

}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }

    const clearCartHandler = () => {
        dispatchCartAction({ type: "CLEAR" })
    }

    const cartContext = {
        cartItems: cartState.cartItems,
        totalAmount: cartState.totalAmount,
        totalItems: cartState.totalItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;