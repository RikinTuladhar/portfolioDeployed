import { createSlice } from "@reduxjs/toolkit"

const initialState={
    mobileView :false
}

export const mobileViewSlice = createSlice({
    name:'mobileView',
    initialState,
    reducers:{
        handleMobileView:(state,action)=>{
            state.mobileView = action.payload
        }
    }
})

export const {handleMobileView} = mobileViewSlice.actions
export default mobileViewSlice.reducer