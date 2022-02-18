import Nasa from "../assets/NasaSkull.jpg";
import Album from "../assets/AlbumSkull.jpg";
import Saint from "../assets/SaintSkull.jpg";
import Pop from "../assets/PopSkull.jpg";
import Sheeps from "../components/CreepySheeps";
import NeonSkull from "../assets/skulls_neon.png"
import Skulls from "./Skulls";

import React from "react";
import Slide from "react-reveal/Slide";

class Artwork extends React.Component {
  render() {
    return (
      <div className="artwork" id="artwork">
          <Skulls/>
          <Sheeps />
          
        </div>
      
    );
  }
}
export default Artwork;
