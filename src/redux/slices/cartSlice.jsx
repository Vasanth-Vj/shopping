import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
    totalDiscount: 0,
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
       addToCart(state, action) {
        const newItem = action.payload;
        const itemIndex = state.products.find((item) => item.id === newItem.id)
        if(itemIndex) {
            itemIndex.quantity++;
            itemIndex.totalPrice += newItem.price;
        } else {
            state.products.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                image: newItem.image,
                discount: newItem.discount || 0,
                description: newItem.description
              
            });
        }
        state.totalQuantity = state.products.reduce((total, item) => {
            console.log(`Total: ${total}, Current Item Quantity: ${item.quantity}`);
            return total + item.quantity;
          }, 0);
          
        state.totalPrice = state.products.reduce((total, item) => {
            console.log(`Total: ${total}, Current Item Price: ${item.price}`);
            return total + item.quantity * item.price;
        }, 0);
        state.totalDiscount = state.products.reduce((total, item) => total + item.quantity * item.discount, 0);
       },
       removeFromCart(state, action) {
        const id = action.payload;
        state.products = state.products.filter(item => item.id !== id);

        state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.products.reduce((total, item) => total + item.quantity * item.price, 0);
        state.totalDiscount = state.products.reduce((total, item) => total + item.quantity * item.discount, 0);
       },
       increaseQuantity(state, action) {
        const id = action.payload;
        const findItem = state.products.find((item) => item.id ===id)
            if (findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
            }

            state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.products.reduce((total, item) => total + item.quantity * item.price, 0);
            state.totalDiscount = state.products.reduce((total, item) => total + item.quantity * item.discount, 0);
       },
       
       decreaseQuantity(state, action) {
        const id = action.payload;
        const findItem = state.products.find((item) => item.id === id);
        if (findItem && findItem.quantity > 1) {
            findItem.quantity--;
            findItem.totalPrice -= findItem.price;
        }

     
        state.totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.products.reduce((total, item) => total + item.quantity * item.price, 0);
        state.totalDiscount = state.products.reduce((total, item) => total + item.quantity * item.discount, 0);
    }
},
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = CartSlice.actions
export default CartSlice.reducer