import Interapt from "../assets/Interapt.png";
import React from "react";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";

class Intro extends React.Component {
  render() {
    return (
      <>
        <section class="container text-white body-font pt-20 pb-44 bg-bgGray mx-auto h-full">
          <Fade duration={4000} class=" px-5 py-24 mx-auto justify-start">
            <div>
              <div class="flex flex-col mx-auto">
                <h1 class="text-left text-2xl font-thin title-font">
                  Hi there, I'm Andrew.
                </h1>
                <h1 class="text-left text-5xl font-thin title-font mt-4">
                  I'm an aspiring{" "}
                  <span className="font-semibold">UI Designer</span> and{" "}
                  <span className="font-semibold">Developer.</span>
                </h1>

                <h1 class="text-left text-2xl font-thin title-font mt-10">
                  Currently, I'm an apprentice in training for{" "}
                  <span className="font-semibold ml-1 mr-1"> UX Design </span>{" "}
                  at
                  <div className="flex font-semibold hover:text-red-300">
                    <a
                      href="https://interapt.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Interapt
                    </a>
                    <img
                      className="w-8 h-8 ml-2 object-scale-down"
                      src={Interapt}
                    />
                  </div>
                </h1>
                <h1 class="text-left text-2xl font-thin title-font mt-10">
                  <br></br>
                  While learning methodologies of UX research I'm developing
                  projects for this portfolio. <br></br>I'm also the creator and
                  artist of the NFT project Creepy Sheeps.
                </h1>
                <p></p>
              </div>
            </div>
          </Fade>
        </section>
      </>
    );
  }
}
export default Intro;
