import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './pages/Body';
import Contact from './pages/Contact.js';
import About from './pages/About';
import Artwork from './pages/Artwork';
import './App.css';

function App() {
  return (
    <div className="App bg-bgGray scroll-smooth">
      
      <Router>

       <Navbar/>
      
       <Routes>
         <Route exact path="/" element={<Body/>}></Route>
         <Route path="/artwork" element={<Artwork/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
       </Routes>

       </Router>

    </div>
  );
}

export default App;
