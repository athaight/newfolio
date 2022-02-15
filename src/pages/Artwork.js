import Nasa from "../assets/NasaSkull.jpg";
import Album from '../assets/AlbumSkull.jpg'
import Saint from '../assets/SaintSkull.jpg'
import Pop from '../assets/PopSkull.jpg'
import React from 'react';
import Slide from 'react-reveal/Slide';

class Artwork extends React.Component {
  render(){ 
    return(
    <div className="artwork mt-44" id="artwork">
      {/* <Slide left><div className="text-right p-4 drop-shadow-xl  text-white mt-44 mb-12 rounded-r-lg bg-bgGrayLite w-96"><Slide left><h1>ARTWORK</h1></Slide></div></Slide> */}
    <div className="container homework transform flex justify-around mx-auto rounded-xl bg-bgGray hover:bg-purple-400 transition duration-500">
      <div className="homeworkOne opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-pink transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
        <img className="rounded-xl "src={Pop} alt="Pop Skull"/>
      </div>
      <div className="homeworkOne opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-peach transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
        <img className="rounded-xl"src={Nasa} alt="Nasa Skull"/>
      </div>
      <div className="homeworkOne opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-ltblue transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
        <img className="rounded-xl"src={Album} alt="Album Skull"/>
      </div>
      <div className="homeworkOne opacity-60 z-0 transform mx-auto w-full p-12 hover:drop-shadow-ltyellow transition duration-500 hover:scale-175 hover:opacity-100 hover:z-10">
        <img className="rounded-xl"src={Saint} alt="Saint Skull"/>
      </div>
    </div>
    </div>
  );
}
}
export default Artwork;