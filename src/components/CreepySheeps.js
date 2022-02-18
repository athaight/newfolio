import sheeps1 from "../assets/sheep/image1.png";
import sheeps2 from "../assets/sheep/image2.png";
import sheeps3 from "../assets/sheep/image3.png";
import sheeps4 from "../assets/sheep/image4.png";
import sheeps5 from "../assets/sheep/image5.png";
import sheeps6 from "../assets/sheep/image6.PNG";
import sheeps7 from "../assets/sheep/image7.PNG";
import sheeps8 from "../assets/sheep/image8.PNG";
import sheeps9 from "../assets/sheep/image9.PNG";
import sheeps10 from "../assets/sheep/image10.PNG";
import sheeps11 from "../assets/sheep/image11.PNG";
import sheeps12 from "../assets/sheep/image12.png";
import NeonSheep from "../assets/sheep_neon.png";
import Tilt from "react-parallax-tilt";

function Sheeps() {
  return (
    <div className="h-full">
      <div className="neonSkull pb-12">
        <img src={NeonSheep} />
      </div>
      <div class="container grid grid-cols-3 gap-2 mx-auto p-8 mb-44">
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps1} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps9} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps3} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps7} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps4} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps8} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps5} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps2} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps6} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps10} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps12} alt="image" />
          </Tilt>
        </div>
        <div class="w-full rounded ease-in-out duration-300 hover:shadow-xl">
          <Tilt
            className="parallax-effect-glare-scale hover:shadow-2xl ease-in-out duration-500"
            perspective={5000}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.35}
            scale={1.01}
          >
            <img src={sheeps11} alt="image" />
          </Tilt>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Sheeps;
