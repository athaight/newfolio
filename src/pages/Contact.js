import MeBig from "../assets/MeBig.png";
import Logo from "../assets/LogoSmall.jpg";
import { Fade } from "react-reveal";
import React from "react";

class Contact extends React.Component {
  render() {
  return (
    <div className=" pb-44 pt-12">
        <Fade>
      <section id="contact" class="text-gray-600 body-font relative bg-bgGray pt-96 pb-44" >
          <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
              Contact Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-200">
              Let's connect! Drop me a line and I'll get back to you, usually
              within 48hrs.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-300 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-300 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-300 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-amber-500 rounded text-lg">
                  SEND
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:haightdevelopment@gmail.com" class="text-amber-500">haightdevelopment@gmail.com</a>
                
              </div>
                <p class="leading-normal my-5 mx-auto text-gray-200">
                  Online from
                  <br />
                  Phoenix, AZ
                </p>
            </div>
          </div>
        </div>
      </section>
        </Fade>
    </div>
  );
}
}
export default Contact;
