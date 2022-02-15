import Logo from "../assets/Logo.png"
function Navbar() {
  return (
    <header id="home" className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <div className="w-12 justify-center">
        <img className="mb-2" src={Logo} />
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#work" className="mr-5 hover:text-gray-500 cursor-pointer">Work</a>
          <a href="#artwork" className="mr-5 hover:text-gray-500 cursor-pointer">Artwork</a>
          <a href="#about" className="mr-5 hover:text-gray-500 cursor-pointer">About</a>
          <a href="#contact" className="mr-5 hover:text-gray-500 cursor-pointer">Contact</a>
        </nav>
        
      </div>
    </header>
  );
}

export default Navbar;
