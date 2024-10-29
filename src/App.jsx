import { Outlet } from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  
  return (
    <>
    <Header></Header>
     <Home></Home>
     <Outlet></Outlet>
    </>
  )
}

export default App
