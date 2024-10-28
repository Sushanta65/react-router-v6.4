import { Outlet } from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header";

function App() {

  return (
    <>
    <Header></Header>
     <h2>Home Page</h2>
     <Outlet></Outlet>
    </>
  )
}

export default App
