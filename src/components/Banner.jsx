import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-primary text-white relative py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-bold text-3xl text-black mb-2 md:text-4xl leading-[50px]">
              We adore your words here at
              <p className="text-secondary text-5xl mb-4">Precise Assignments</p>
            </h1>
            <p className="text-xl mb-4 text-gray-800 pr-2">
              Whether it is{" "}
              <span className="text-white">
                professional editing, proofreading, presentation{" "}
              </span>
              or <span className="text-white">question paper,</span> we love the
              formal styling of these words. We also know how to help students and
              professionals use scholarly words more effectively.
            </p>
            <button className="items-center justify-center mx-auto bg-black text-primary font-bold py-3 px-6 rounded hover:bg-white hover:text-black transform hover:scale-125 transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg"
              alt="Hero"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="bg-primary h-64 w-full overflow-hidden">
          <svg
            className="absolute top-0 right-0 left-0 h-64 w-full"
            viewBox="10 10 1400 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill="#fff"
              fillOpacity="0.75"
              d="M0 49.5C0 49.5 71.5 0 214 0s214 49.5 214 49.5 214-49.5 428-49.5S1285 49.5 1428 49.5V174H0V49.5z"
            ></path>
            </svg>
            </div>
        
      </div>
    </>
  );
};

export default Banner;
