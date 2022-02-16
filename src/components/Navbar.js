import Logo from "../assets/Logo.png";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header id="home" className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <div className="w-12 justify-center">
        <NavLink exact to="/logo" ><img className="mb-2" src={Logo} /></NavLink>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink exact to="/work" className="nav-link mr-5 hover:text-gray-500 cursor-pointer">Work</NavLink>
          <NavLink exact to="/artwork" className="nav-link mr-5 hover:text-gray-500 cursor-pointer">Artwork</NavLink>
          <NavLink exact to="/about" className="nav-link mr-5 hover:text-gray-500 cursor-pointer">About</NavLink>
          <NavLink exact to="/contact" className="nav-link mr-5 hover:text-gray-500 cursor-pointer">Contact</NavLink>
        </nav>
        
      </div>
    </header>
    
  );
}

export default Navbar;
