import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Dashboard from "./page/dashboard/Dashboard";
import Header from "./component/Header";
import HeaderAndSidebar from "./component/HeaderAndSidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>

        <Route path="dashboard" element={<HeaderAndSidebar/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
        
        <Route path="*" element={<div><h1 className="text-center text-5xl font-bold">404 Not Found</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
