import handPic from "../assets/hand.png";
import biteSize from "../assets/LyndsBiteComp.png";
import Intro from "../components/Intro";
import { Fade } from "react-reveal";


export const Work = () => {
  return (
    <div  className=" bg-bgGray pt-44 pb-44">
      <Intro/>
      <Fade delay={1000} ><section className="text-gray-600 body-font">
        <div id="work" className="container px-5 py-24 mx-auto bg-bgGrayLite rounded-xl">
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
              information on oral health and hygiene, as well as access to her
              Discount Code for savings on{" "}
              <a href="" classNameName="hover:text-burstLinkText">
                Burst Oral Care
              </a>{" "}
              products.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="mx-auto p-4 ">
              <div className="p-6 rounded-lg">
                <img
                  className="bite h-96 rounded w-full mb-6"
                  src={biteSize}
                  alt="content"
                />
                <h3 className="tracking-widest text-violet-400 text-xs font-medium title-font">
                  <a href="">bitesizehygiene.com</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section></Fade>
    </div>
  );
}

export default Work;
