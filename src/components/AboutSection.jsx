import React from "react";
import "./AboutSection.css";
import { FaRegCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-about-us-section bg-cover bg-bottom py-6 mt-6 mb-4">
        {/* update this container to have the image section on the left 40% and the right 60% for the content by tailwind and modify this*/}  <div className="container mx-auto px-4 flex"></div>
      <div className="container mx-auto px-4 flex justify-center gap-4 ">
        <div className="md:w-2/5">
          <div className="pl-16 md:h-[400px] h-[300px]">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060234.jpg"
              alt="Team Meeting"
              className="object-cover h-full w-full rounded-md shadow-lg border-8 border-black"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-3/5 text-left px-20">
          <h2 className="text-lg font-bold mb-2 text-black dark:text-white uppercase">
            Who we <span className="text-primary">are?</span>
          </h2>
          <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-gray-600 dark:text-gray-300 text-md md:w-[450px]">
          We are one of the professional and well-known service providers in the UK who not only help in editing and proofreading but also show availability 24/7 to answer concerns and resolve them. Our team of very skilled proofreaders is enthusiastic about proofreading a wide range of creative writing documents in addition to other kinds of documents, such as literature reviews and research papers.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-md md:w-[450px] mt-2">
          Regardless of the turnaround time you select, we are dedicated to quality and have outstanding time management abilities that guarantee to meet your deadline, whether it be within a few hours or seven days. We may either thoroughly edit your work to help you with the workflow, word choice, clarity-check, and structure, or we can just go over it and fix typos and grammar errors.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-md md:w-[450px] mt-2 ">
            <FaRegCheckCircle className="text-primary h-6 w-6 mr-2 inline-block "/>Get your work reviewed by our professionals. </p>
          <p className="text-gray-600 dark:text-gray-300 text-md md:w-[450px] mt-2 ">
            <FaRegCheckCircle className="text-primary h-6 w-6 mr-2 inline-block "/>Don't get stressed due to your tight deadlines anymore.</p>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
