import { Routes, Route } from "react-router";
import Home from "../pages/Home";

const Routor = () => {
  return (
    <div>        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={"ABOUT"}/>
        <Route path="/career" element={"CAREER"}/>
      </Routes>
    </div>
  )
}

export default Routor