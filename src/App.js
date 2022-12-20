
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error";
import Context from "./components/Context/ContextApi";

// import axios from "axios"
// import { useEffect } from "react";
function App() {
  
  // const getData=()=>{
  //   axios.get("/food").then((res)=>{
  //     console.log(res.data);
  //   })
  // }
  // useEffect(() => {
  //  getData()
  // }, []);

  return (
    
    <div className="App">
  
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/cart/:id" element={<CardsDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
  
    </div>
  );
}

export default App;
