import {configureStore} from "@reduxjs/toolkit";
import reducer from "./Redux/reducers/main";


const store = configureStore({
    reducer
})

export default store;