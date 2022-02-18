import Sheeps from "../components/CreepySheeps";
import Skulls from "./Skulls";
import React from "react";

class Artwork extends React.Component {
  render() {
    return (
      <div className="artwork" id="artwork">
        <Skulls className="" />
        <Sheeps />
      </div>
    );
  }
}
export default Artwork;
