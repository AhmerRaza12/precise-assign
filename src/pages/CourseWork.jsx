import React from "react";
import "./CourseWork.css";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import GetInTouch from "../components/GetInTouch";
import SubjectsWeOffer from "../components/SubjectsWeOffer";
import Process from "../components/Process";
const InnerPage = () => {
  return (
    <>
      <section className="bg-black bg-banner-pattern bg-cover bg-center dark:bg-blue-900 py-12 sm:py-20 relative main-title-section-wrapper">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 sm:mb-6 dark:text-white">
            Worried about{" "}
            <span className="text-primary tracking-wide border-b-2 py-1 border-primary ">
              Lengthy Coursework?
            </span>
          </h2>
          
        </div>
        
        <div className="container mx-10 px-6 flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 md:mr-28">
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white mb-2">
              Don’t worry, the precise paper can assist you with proofreading
              and editing your coursework.
            </p>
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white">
              Business plans, case studies, lab reports, and marketing plans are
              among the assignments we edit and proofread. A formal written
              document that outlines business objectives, strategies for
              achieving them, and the deadlines for doing so is what we provide
              as per the requirement. We understand the lengthy coursework
              provided based on all the reading that has been taught in class.
            </p>
            <button className="items-center flex justify-center mx-auto bg-white text-black font-bold py-3 px-6 rounded  hover:text-black hover:bg-primary transition duration-500 ease-in-out">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-2/5 p-6 ">
          <div className="bg-white  p-6 rounded-lg shadow-xl border-2 border-dashed border-black ">
          <h2 className="text-primary text-3xl text-center  leading-8  font-bold mb-1">
          NO UPFRONT PAYMENT
          </h2>
 
          <p className="text-center text-gray-900 font-semibold mb-4 leading-4">
          Up To 20% Off
          </p>
          

          <form className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                required
                type="text"
                id="name"
                placeholder="Your Name *"
                className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone *"
                className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                required
                placeholder="Your Email *"
                className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <textarea
                rows={1}
                id="requirements"
                placeholder="Your Requirements"
                type="text"
                className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
              ></textarea>
            </div>
          </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black border-2  border-black font-bold py-3 px-6 rounded-lg hover:bg-primary hover:text-black  transition duration-500 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <Services />
      <GetInTouch />
      <SubjectsWeOffer />
      <Process  />

      {/* <div className="wave-divider  dark:bg-gray-800">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="w-full"
  >
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      // want to use the bg-banner-pattern in the fill too aswell as the color-primary
      className="fill-primary dark:fill-blue-900" 
    />
  </svg>
</div> */}
    </>
  );
};

export default InnerPage;
