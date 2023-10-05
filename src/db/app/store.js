import { configureStore } from "@reduxjs/toolkit";
import db from '../features/db'

const store = configureStore({
    reducer: {
        db
    }
})

export default store