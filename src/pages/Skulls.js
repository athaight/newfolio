import Nasa from "../assets/NasaSkull.jpg";
import Album from "../assets/AlbumSkull.jpg";
import Saint from "../assets/SaintSkull.jpg";
import Pop from "../assets/PopSkull.jpg";
import NeonSkull from "../assets/skulls_neon.png";
import Tilt from "react-parallax-tilt";

import React from "react";
import Slide from "react-reveal/Slide";

class Skulls extends React.Component {
  render() {
    return (
      <div className="skulls mb-44 pb-44" id="skulls">
        <div className="neonSkull pb-12">
          <img src={NeonSkull} />
        </div>
        <Slide top>
          <div className="p-4 w-full drop-shadow-xl text-2xl text-white mb-12 rounded-r-lg text-center">
            <Slide top duration={4000}>
              <h1>Personal art pieces illustrated in Procreate</h1>
            </Slide>
          </div>
        </Slide>
        <div className="container homework transform flex justify-around mx-auto rounded-xl bg-bgGray hover:bg-purple-400 hover:shadow-2xl transition duration-500">
          <div className="popSkull opacity-60 z-0 transform mx-auto w-full p-12 ">
            <Tilt>
              <img className="rounded-xl " src={Pop} alt="Pop Skull" />
            </Tilt>
          </div>
          <div className="nasaSkull opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-peach transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
            <Tilt>
              <img className="rounded-xl" src={Nasa} alt="Nasa Skull" />
            </Tilt>
          </div>
          <div className="albumSkull opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-ltblue transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
            <Tilt>
              <img className="rounded-xl" src={Album} alt="Album Skull" />
            </Tilt>
          </div>
          <div className="saintSkull opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-ltyellow transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
            <Tilt>
              <img className="rounded-xl" src={Saint} alt="Saint Skull" />
            </Tilt>
          </div>
        </div>
      </div>
    );
  }
}
export default Skulls;
