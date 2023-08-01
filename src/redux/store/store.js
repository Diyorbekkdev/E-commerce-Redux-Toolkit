import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsName } from "../slice/productSlice";


const reducer = {
  [productsName]: productReducer,
};

const store = configureStore({
  reducer,
});
export default store