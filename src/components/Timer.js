import React, { useState } from "react";
import { WorkingFlipDate } from "./WorkingFlipDate";
import { Fade } from "react-reveal";

function Timer() {
  return (
    <div className="timer mx-auto ">
      <div className="flex ">
        <div className="" style={{ margin: "auto" }}>
          <Fade duration={4000}>
            <h1 className="">
              <WorkingFlipDate value={"April, 20 2022 17:20:00"} />
            </h1>
          </Fade>
        </div>
      </div>
      <Fade duration={2000}>
        <div className=" w-full text-white text-2xl ">
          <div className="container mx-auto lg:mt-12 md:mt-2 sm:mt-0">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col -mt-24">
                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">
                    Creepy Sheeps
                  </h1>
                  <p className="mb-8 leading-relaxed text-left">
                    Look for the NFT drop of unique Creepy Sheeps on April 20th,
                    2022 at 4:20pm. 10,000 unique NFTs with trackable levels of
                    rarity will drop on the OpenSea exchange and this site will
                    progress into the "Roadmap".{" "}
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 ease-in-out duration-300 rounded text-lg mt-12">
                      Add Calendar Reminder
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Timer;
