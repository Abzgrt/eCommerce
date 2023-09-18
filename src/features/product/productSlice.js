import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk("product/get-products", async(userData,thunkAPI) => {
    try{
        return await productService.getProducts();
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
    
});
const initialState = {
    products: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}
 export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
});

export default productSlice.reducer;
