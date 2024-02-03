
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../view/login/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;