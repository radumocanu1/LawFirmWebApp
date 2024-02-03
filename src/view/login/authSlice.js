import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        email:null,
        username:null,
        isAuthenticated: false,
        currentRoute: "/home",
    },
    reducers: {
        setUser: (state, action) => {
            const { username, email } = action.payload;
            state.username = username;
            state.email = email;
            state.isAuthenticated = true;
        },
        refreshSession: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        setCurrentRoute: (state, action) => {
            state.currentRoute = action.payload;
        },
        setIsAuthenticated: (state) => {
            state.isAuthenticated = true;
        },
    },
});

export const { setUser, refreshSession, setCurrentRoute, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;