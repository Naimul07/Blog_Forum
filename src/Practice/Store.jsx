import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useCart = create(persist((set) => ({
    cart: [],
    addCart: (i) => set((state) => {
        const exist = state.cart.find((item) => item.id === i);
        if (exist) {
            return {
                cart: state.cart.map((item) => 
                    item.id === i ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return { cart: [...state.cart, { id: i, quantity: 1 }] };
        }
    }),
    removeCart: (i) => set((state) => {
        return { cart: state.cart.filter((item) => item.id !== i) };
    }),
    addQuantity: (i) => set((state) => {
        return {
            cart: state.cart.map((item) => 
                item.id === i ? { ...item, quantity: item.quantity + 1 } : item
            )
        };
    }),
    subQuantity: (i) => set((state) => {
        return {
            cart: state.cart
                .map((item) => 
                    item.id === i && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((product) => product.quantity > 0)
        };
    }),
}), {
    name: 'cart-storage', // Unique name for the storage (key)
    getStorage: () => localStorage, // Use local storage
}));

export default useCart;














/* //we will learn zustand
import { create } from "zustand";
const useCart = create((set) => ({
    cart: [],
    addCart: (i) => set((state) => {
        const exist = state.cart.find((item) => item.id === i);
        if (exist)
            return { cart: state.cart.map((item) => (item.id === i ? { ...item, quantity: item.quantity + 1 } : item)) }
        else
            return { cart: [...state.cart, { id: i, quantity: 1 }] };
    }),
    removeCart: (i) => set((state) => {
        return { cart: state.cart.filter((item) => item.id !== i) }
    }),
    addQuantity: (i)=>set((state)=>{
        return {cart: state.cart.map((item)=>(
            item.id === i ?{...item,quantity:item.quantity+1}:item
        ))};
    }),
    subQuantity: (i)=>set((state)=>{
        return {cart: state.cart.map((item)=>(
            item.id === i && item.quantity >=1 ? {...item,quantity:item.quantity-1}:item
        )).filter((product)=>product.quantity > 0)}
    }),
}))

export default useCart; */