import { configureStore } from "@reduxjs/toolkit";
import  whishlitSlice from '../Slice/whishlist'
import cartSlice from '../Slice/cartSlice'
const store=configureStore({
    reducer: {
        WhishlistReducer:whishlitSlice,
        cartReducer:cartSlice
    }
})

export default store;