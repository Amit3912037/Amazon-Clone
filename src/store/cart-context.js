import { createContext } from "react";

const CartContext=createContext({
    cartItems: [],
    totalAmount: 0,
    totalItems: 0,
    addItem:(item)=>{},
    removeItem: (id)=>{},
    clearCart:()=>{}
})

export default CartContext;