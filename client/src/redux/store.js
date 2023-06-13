import {createSlice,configureStore} from '@reduxjs/toolkit';

//used redux for globally  state management

//created a sclice 
const autoSlice = createSlice({
    name:'auth',
    initialState: {
        isLogin:false
    } ,
    reducers: {
        login(state){
            state.isLogin = true;
        },
        logout(state){
            state.isLogin = false;
        }
    }
})

export const authAction = autoSlice.actions;     //to deal with login and logout actions

export const store = configureStore({
    reducer: autoSlice.reducer,
})