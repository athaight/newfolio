import biteSize from "../assets/BiteLaptop.png";
import creepyComp from "../assets/SheepLaptop.png";
import { Fade } from "react-reveal";
import background from "../assets/hand.png";
import SheepOutilne from "../assets/sheepOutline.png";
import Tilt from "react-parallax-tilt";

export const Work = () => {
  return (
    <div className=" bg-bgGray pb-44 w-fit mx-auto">
      <Fade delay={1000}>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={9000}
          transitionSpeed={1500}
          gyroscope={true}
          glareEnable={true}
          glareMaxOpacity={0.01}
          glareColor="lightblue"
          glarePosition="all"
        >
          {" "}
          <section className="text-gray-600 body-font">
            <div
              id="work"
              className="container px-5 py-24 mx-auto bg-bgGrayLite rounded-xl"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-wrap w-full mb-20  mt-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <p className="text-xxxl text-gray-300 ml-28">
                    Bite Size Hygiene |
                  </p>
                </div>
                <p className="lg:w-2/5 w-full leading-relaxed text-left text-gray-500 ">
                  A landing page for my wife who's a Dental Hygienist and Brand
                  Ambassador for{" "}
                  <a href="" classNameName="hover:text-burstLinkText">
                    Burst Oral Care
                  </a>
                  . This page is where she directs her patients and clients for
                  information on oral health and hygiene, as well as access to
                  her Discount Code for savings on{" "}
                  <a href="" classNameName="hover:text-burstLinkText">
                    Burst Oral Care
                  </a>{" "}
                  products.
                </p>
              </div>
              <div className="flex flex-wrap -m-4 ">
                <div className="mx-auto p-4 ">
                  <div className="p-6 rounded-lg ">
                    <img
                      className="bite h-96 rounded w-full mb-6 "
                      src={biteSize}
                      alt="content"
                    />

                    <h3 className="tracking-widest text-violet-400 text-xs font-medium title-font">
                      <a href="/">bitesizehygiene.com</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tilt>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={9000}
          transitionSpeed={1500}
          gyroscope={true}
          glareEnable={true}
          glareMaxOpacity={0.01}
          glareColor="lightblue"
          glarePosition="all"
        >
          {" "}
          <section className="text-gray-600 body-font mt-12">
            <div
              id="work"
              className="container px-5 py-24 mx-auto bg-bgGrayLite rounded-xl"
              style={{
                backgroundImage: `url(${SheepOutilne})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-wrap w-full mb-20  mt-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <p className="text-xxxl text-gray-300 ml-28">
                    Creppy Sheeps |
                  </p>
                </div>
                <p className="lg:w-2/5 w-full leading-relaxed text-left text-gray-500 ">
                  NFT Landing page and website for the Creepy Sheeps NFT
                  project.{" "}
                  <a
                    href="https://www.creepysheeps.com"
                    classNameName="hover:text-burstLinkText"
                  >
                    creepysheeps.com
                  </a>
                  . This site was created as a need to direct people to the
                  project has increased. The NFT's are scheduled to drop on
                  April 20th, 2022 at which time the website's functionality
                  will increase at set stages as according to the "roadmap"
                  timeline of the project. This project's requirements were a
                  countdown timer, gallery, and ability to scale.{" "}
                </p>
              </div>
              <div className="works flex flex-wrap -m-4 ">
                <div className="mx-auto p-4 ">
                  <div className="p-6 rounded-lg ">
                    <h3 className="tracking-widest text-violet-400 text-xs font-medium title-font">
                      <a href="/">creepysheeps.com</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tilt>
        <div className="flex flex-row justify-end -mt-96 pb-12">
        <Tilt className="w-fit mr-12"
          tiltMaxAngleX={5}
          tiltMaxAngleY={24}
          perspective={9000}
          transitionSpeed={1500}
          gyroscope={true}
          glareEnable={!true}
          glareMaxOpacity={0.01}
          glareColor="black"
          glarePosition="all"
        >
          
            <img
              className="bite h-96 rounded w-fit mb-6 "
              src={creepyComp}
              alt="content"
            />
          
        </Tilt>
        </div>
      </Fade>
    </div>
  );
};

export default Work;
