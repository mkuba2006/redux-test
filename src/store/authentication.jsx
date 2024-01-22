import { createSlice } from "@reduxjs/toolkit";

const defaultvalue= {
    isLogged: false
}

const AuthenticationSlice = createSlice({
    name:'authentication',
    initialState: defaultvalue,
    reducers:{
        login(prev){
            prev.isLogged = true;
        },
        logout(prev){
            prev.isLogged = false;
        },
    },
})


export default AuthenticationSlice.reducer;
export const AuthActions = AuthenticationSlice.actions