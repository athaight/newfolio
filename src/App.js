import Navbar from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Artwork from "./pages/Artwork";
import Footer from "./components/Footer";
import { Home } from "./components";
import "./App.css";
import Logo from "./pages/Logo";

function App() {
  return (
    <div className="App bg-bgGray scroll-smooth h-full">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logo" element={<Logo />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
          <Route path="/artwork" element={<Artwork />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
