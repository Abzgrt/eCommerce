import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { userService } from "./userService";
export const registerUser = createAsyncThunk("auth/register", async(userData,thunkAPI) => {
    try{
        return await userService.register(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
    
});
export const loginUser = createAsyncThunk("auth/login", async(userData,thunkAPI) => {
    try{
        return await userService.login(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
    
});
const initialState = {
    user: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}
 export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.createdUser = action.payload;
            if(state.isSuccess === true){
                toast.info("User Created successsfully")
            }
       })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            if(state.isError === true){
                toast.error(action.payload)
            }
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
            if(state.isSuccess === true){
                localStorage.setItem("token", action.payload.token)
                toast.info("User logged in successsfully!")
            }
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.error;
            if(state.isError === true){
                toast.error(action.payload)
            }
       })
    },
});

export default authSlice.reducer;
