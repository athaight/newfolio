import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work';
import Contact from './pages/Contact.js';
import About from './pages/About';
import Artwork from './pages/Artwork';
import Footer from "./components/Footer"
import './App.css';
import Logo from './pages/Logo';

function App() {
  return (
    <div className="App bg-bgGray scroll-smooth">
      
      <Router>

       <Navbar/>
      
       <Routes>
         <Route path="/logo" element={<Logo/>}></Route>
         <Route exact path="/work" element={<Work/>}></Route>
         <Route path="/artwork" element={<Artwork/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
       </Routes>


       </Router>
       <Footer/>

    </div>
  );
}

export default App;
