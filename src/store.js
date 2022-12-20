import {configureStore} from "@reduxjs/toolkit";
// import { useState } from "react";
import reducer from "./Redux/reducers/main";


const store = configureStore({
    reducer ,
    // state : [loginData , setLoginData] = useState("hiran")

})

export default store;