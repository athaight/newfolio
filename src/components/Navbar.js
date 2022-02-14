import Logo from "../assets/Logo.png"
function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <div className="w-12 justify-center">
        <img className="mb-2" src={Logo} />
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Work</a>
          <a className="mr-5 hover:text-gray-900">Artwork</a>
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        
      </div>
    </header>
  );
}

export default Navbar;
