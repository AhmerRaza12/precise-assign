import React from "react";
import BgImage from "../assets/new-bg.png";
// import ContactImage from "https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg";

const Banner = () => {
  return (
    <>
      <section className="bg-primary text-white relative py-10 px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 mt-4">
            <h1 className="font-bold text-3xl text-black mb-2 md:text-4xl leading-[50px]">
              We adore your words here at
              <p className="text-secondary text-5xl mb-4">
                Precise Assignments
              </p>
            </h1>
            <p className="text-xl mb-4 text-gray-800 pr-2">
              Whether it is{" "}
              <span className="text-white">
                professional editing, proofreading, presentation{" "}
              </span>
              or <span className="text-white">question paper,</span> we love the
              formal styling of these words. We also know how to help students
              and professionals use scholarly words more effectively.
            </p>
            <button className="items-center justify-center mx-auto bg-black text-primary font-bold py-3 px-6 rounded hover:bg-white hover:text-black transform hover:scale-125 transition duration-300 ease-in-out">
              Get Started
            </button>
            <div className="mt-10 lg:col-start-2 ">
              <p className=" font-semibold leading-6 text-white uppercase">
                Our skilled proofreaders have already helped
              </p>
              <h4 className=" text-2xl font-extrabold leading-8 text-black sm:text-4xl sm:leading-9 uppercase mt-2">
                over 10,000 clients
              </h4>

              <ul className="mt-8 space-y-2 font-semibold">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 leading-6 text-black"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-2 leading-6 text-gray-800 text-lg">
                    We have turned our client's expectations into reality while
                    providing proficient documents as required, and we would be
                    honoured to gain your trust as well.
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 leading-6 text-black"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-2 leading-6 text-gray-800 text-lg">
                    We can support your success in the academic world since we
                    value the choice of words!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 h-[500px]">
            <img
              src={BgImage}
              alt="Hero"
              className="w-full rounded-xl justify-center mx-auto h-full bg-center object-fill "
            />
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="bg-primary h-64 w-full overflow-hidden">
          <svg
            className="absolute top-0 right-0 left-0 h-64 w-full"
            viewBox="10 0 1400 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              fillOpacity="1.0"
              d="M0 49.5C0 49.5 71.5 0 214 0s214 49.5 214 49.5 214-49.5 428-49.5S1285 49.5 1428 49.5V174H0V49.5z"
            ></path>
          </svg>
        </div>
      </div>

      <section className="bg-white py-6 px-8 ">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-center text-black font-bold bg-primary px-4 py-2 rounded-lg shadom-lg inline-block">
            Contact Us
          </h1>
        </div>
        {/* No upfront payment -upto 20% off text centered*/}
        <p className="text-center text-lg text-gray-black font-medium mt-2 tracking-wider uppercase leading-5 ">
          No upfront payment - upto 20% off
        </p>
        {/* Form with fields wrapped in flexbox layout without any labels Name field , Email field, Phone field and additional requirements for Name Email and Phone they are adjacent width divided in 1/3 and then additional requirements is textarea with 5 rows */}
        <form className="flex flex-wrap justify-center items-center my-10 max-w-5xl mx-auto ">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black"
              id="grid-first-name"
              type="text"
              placeholder="Your Name*"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black"
              id="grid-last-name"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black"
              id="grid-last-name"
              type="text"
              placeholder="Your Phone"
            />
          </div>
          <div className="w-full px-3 py-2">
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black"
              rows="8"
              placeholder="Additional Requirements"
            ></textarea>
          </div>
{/* Submit Button */}
<div className="w-full text-center">
      <button 
        className="bg-white hover:bg-primary text-black font-bold text-xl py-4 px-16 border-[3px] border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg duration-500" 
        type="submit"
      >
        Send Message
      </button>
    </div>
        </form>
      </section>

      {/* <div className="relative">
        <div className="bg-primary h-64 w-full overflow-hidden">
          <svg
            className="absolute top-0 right-0 left-0 h-64 w-full"
            viewBox="10 10 1400 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill="#fff"
              fillOpacity="1.0"
              d="M0 49.5C0 49.5 71.5 0 214 0s214 49.5 214 49.5 214-49.5 428-49.5S1285 49.5 1428 49.5V174H0V49.5z"
            ></path>
            </svg>
            </div>
        
      </div> */}
    </>
  );
};

export default Banner;
