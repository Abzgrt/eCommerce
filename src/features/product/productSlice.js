import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk("product/get-products", async(data, thunkAPI) => {
    try{
        return await productService.getProducts(data);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }  
});
export const getAProduct = createAsyncThunk("product/get-product", async(id, thunkAPI) => {
    try{
        return await productService.getProduct(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }  
});
export const addTowishlist = createAsyncThunk("product/wishlist", async(prodId,thunkAPI) => {
    try{
        return await productService.addToWishlist(prodId);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
    
});
export const addRating = createAsyncThunk("product/rating", async(data,thunkAPI) => {
    try{
        return await productService.rateProduct(data);
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
    initialState,
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
        .addCase(addTowishlist.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addTowishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.wishlist = action.payload;
        })
        .addCase(addTowishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(getAProduct.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.singleProduct = action.payload;
        })
        .addCase(getAProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
        .addCase(addRating.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addRating.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.rating = action.payload;
        })
        .addCase(addRating.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
        })
    },
});

export default productSlice.reducer;
