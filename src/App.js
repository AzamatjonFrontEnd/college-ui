import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Contact from './pages/Contact/Contact';
import Register from "./pages/Register/Register";
import "./assets/styles/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;