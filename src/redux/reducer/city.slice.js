import { createSlice } from "@reduxjs/toolkit";
const initialState=[
]


export const CitySlice=createSlice({
    name:'cities',
    initialState,
    reducers:{
        addCity:(state,action)=>{
            state.push(action.payload)
    },
        removeCity:(state,action)=>{
            //state=[...state].filter(item=>item.id!==action.payload.id)
            const index=state.findIndex(item=>item===action.payload)
            state.splice(index,1)
    },
  
  }
});
//done done actions ro export mikonim
  export const{addCity,removeCity}=CitySlice.actions
  export default CitySlice.reducer