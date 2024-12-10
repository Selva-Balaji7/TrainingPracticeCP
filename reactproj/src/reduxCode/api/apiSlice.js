import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET,POST,PUT,DELETE} from '../../shared/service/HTTP.Service';

const API_URL = "http://localhost:8080/products";

export const fetchData = createAsyncThunk("api/fetchDate" , async ()=>{
   // let response = await axios.get(API_URL);
   let response=await GET(API_URL);
    return response.data;
});

export const deleteData = createAsyncThunk("api/deleteDate" , async (id)=>{
    //await axios.delete(`${API_URL}/${ID}`);
    await DELETE(`${API_URL}/${id}`);
    return id;
});

export const postData = createAsyncThunk("api/postDate" , async (newUser)=>{
    // let resonse = await axios.post(API_URL, val);
    let resonse = await POST(API_URL,newUser);
    return resonse.data;
});


const apiSlice = createSlice({
    name:"api",
    initialState:{
        data:[],
        status:'idle', //loading / success / failed
        error : null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status="loading";
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.status="success";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})
export default apiSlice.reducer;