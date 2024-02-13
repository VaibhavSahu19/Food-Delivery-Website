import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restuarantReducer from "./restuarantSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restuarant: restuarantReducer,
  },
});

export default appStore;
