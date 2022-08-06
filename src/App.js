import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Dashboard from "./page/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        //Home page
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        //Dashboard page
        <Route path="dashboard" element={<Dashboard/>}/>
        //Not Found Page
        <Route path="*" element={<div><h1 className="text-center text-5xl font-bold">404 Not Found</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
