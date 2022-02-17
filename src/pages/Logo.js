import React from "react";
import Vid from '../assets/video/meKev.mp4'
import { Fade } from "react-reveal";

function Logo(){
  var vid = document.getElementById("video");
  // vid.playbackRate = 0.75;
  
    return(
          <Fade duration={4000}>
      <div className="w-full h-full flex" >
          <div className="text-left mx-auto text-2xl text-white ml-96 mt-96" id="kev">Who is the goodest boy<br></br>in the whole wide world? <br></br>My pug Kevin, that's who.</div>
       <video autoPlay  loop muted id='video'>
      <source src={Vid} type="video/mp4"/>
</video>
      </div>
      </Fade>
    );
  }
  
  export default Logo;