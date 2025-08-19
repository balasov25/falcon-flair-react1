import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BMW from "./BMW";
import MercedesCLE53 from "./MercedesCLE53";
import MercedesC43 from "./MercedesC43";
import Audi from "./Audi";
import Rox from "./Rox";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation */}
      <nav className="topbar">
        <Link to="/">Home</Link>
        <Link to="/bmw">BMW M440i</Link>
        <Link to="/mercedes-cle53">Mercedes CLE53</Link>
        <Link to="/mercedes-c43">Mercedes C43</Link>
        <Link to="/audi">Audi RS3</Link>
        <Link to="/rox">Rox 01 VIP</Link>
        <span style={{ marginLeft: "auto" }} />
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Page Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmw" element={<BMW />} />
          <Route path="/mercedes-cle53" element={<MercedesCLE53 />} />
          <Route path="/mercedes-c43" element={<MercedesC43 />} />
          <Route path="/audi" element={<Audi />} />
          <Route path="/rox" element={<Rox />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
