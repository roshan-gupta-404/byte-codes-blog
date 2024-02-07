import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    user : null
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        anonymousLogin:(state, action)=>{
            state.status = false;
            state.user = action.payload.userData;
        },
        login:(state,action)=>{
            state.status = true;
            state.user = action.payload.userData;
        },
        logout:(state)=>{
            state.status = false;
            state.user = null;
        }
    }
})

export const {login, logout, anonymousLogin} = authSlice.actions;

export default authSlice.reducer;