import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Context from "./components/Context/ContextApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //  <Context> 
  <Provider store={store}>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </BrowserRouter>
  </Provider>
    // {/* </Context>  */}
);
