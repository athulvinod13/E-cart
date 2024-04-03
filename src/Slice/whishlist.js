import { createSlice } from "@reduxjs/toolkit";

const whishlitSlice=createSlice({
    name:"whishlit",
    initialState:[],
    reducers:{
        addToWhishlist(state,action){
            state.push(action.payload)
        },
        removeFromWhishlist(state,action){
            return state.filter(item=>item.id!==action.payload)
        }
        
    }
})
export const{addToWhishlist,removeFromWhishlist}=whishlitSlice.actions
export default whishlitSlice.reducer