import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="*" element={<div><h1 className="text-center text-5xl font-bold">Error</h1></div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
