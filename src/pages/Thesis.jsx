import React from "react";
import "./CourseWork.css";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import GetInTouch from "../components/GetInTouch";
import SubjectsWeOffer from "../components/SubjectsWeOffer";
import Process from "../components/Process";
const Thesis = () => {
  return (
    <>
      <section className="bg-black bg-banner-pattern bg-cover bg-center dark:bg-blue-900 py-12 sm:py-20 relative main-title-section-wrapper">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 sm:mb-6 dark:text-white">
            Employ the Best Professionals at the Precise Assignments
            <span className="text-primary tracking-wide border-b-2 py-1 border-primary ml-2 ">
              for Your Reports/Thesis
            </span>
          </h2>
        </div>

        <div className="container mx-10 px-6 flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 md:mr-28">
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white mb-2">
              Most students find it difficult to write an appropriate research
              proposal because of its complexity. The main reason why students
              are under so much pressure at this academic level is because they
              don’t want to make mistakes or forget anything important.
            </p>
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white mb-2">
              As time passes and the stress increases, students become confused.
              If you want to master your research report, assignments or
              proposal editing and proofreading service, get help and achieve
              your goal instead of waiting until the last minute.
            </p>
            <button className="mt-2 items-center flex justify-center mx-auto bg-white text-black font-bold py-3 px-6 rounded  hover:text-black hover:bg-primary transition duration-500 ease-in-out">
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
      <Process />
    </>
  );
};

export default Thesis;
