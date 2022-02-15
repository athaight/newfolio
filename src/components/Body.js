import Intro from './Intro';
import Work from '../pages/Work';
import Artwork from '../pages/Artwork';
import About from '../pages/About'
import Contact from '../pages/Contact';
import Footer from './Footer';


function Body() {
  return (
    <div className="App bg-bgGray">
      
        
        <Intro/>
        <Work/>
        <Artwork/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
  );
}

export default Body;
