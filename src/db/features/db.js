import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allData: [],
    activePage: 'york',
    loading : false
}

const db = createSlice({
    name: 'db',
    initialState,
    reducers: {
        populate: (state, action) => {
            state.allData = action.payload
            state.loading = true
        },

        navigate: (state, action) => {
            state.activePage = action.payload
        },

        toggleFavorite: (state, action) => {
            state.allData = state.allData.map(prop =>  ({...prop, properties: prop.properties.map(obj => obj.id === action.payload ? {...obj, favorite: !obj.favorite} : {...obj})}))
        }
    }
})

export default db.reducer;

export const { populate, navigate, toggleFavorite } = db.actions