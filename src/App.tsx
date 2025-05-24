import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<HeroSection />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
