import React from "react";
import Vid from "../assets/video/meKev.mp4";
import { Fade } from "react-reveal";

function Logo() {
  var vid = document.getElementById("video");
  // vid.playbackRate = 0.75;

  return (
    <Fade duration={4000}>
      <div className="w-full h-full flex overflow-hidden">
        <video autoPlay loop muted id="video">
          <source src={Vid} type="video/mp4" />
        </video>
      </div>
    </Fade>
  );
}

export default Logo;
