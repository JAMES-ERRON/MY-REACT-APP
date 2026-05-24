import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyApp</h2>

        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      </nav>

      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(90deg, #0f172a, #1e3a8a)",
    padding: "15px 30px",
    color: "white",
  },

  logo: {
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 14px",
    borderRadius: "8px",
    transition: "0.3s",
  },

  content: {
    padding: "30px",
    textAlign: "center",
  },
};

export default App;