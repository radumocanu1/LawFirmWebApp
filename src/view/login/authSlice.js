// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        currentRoute: "/home",
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state) => {
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

export const { setUser, clearUser, setCurrentRoute, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;