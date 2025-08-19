import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Ana Sayfa</h1>;
}

function About() {
  return <h1>Hakkında Sayfası</h1>;
}

function Contact() {
  return <h1>İletişim Sayfası</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/about">Hakkında</Link>
        <Link to="/contact">İletişim</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
