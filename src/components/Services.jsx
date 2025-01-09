import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Coursework");

  const tabContent = {
    "Coursework":
      "Coursework might seem very dry for some students, which is also time-taking to be completed. Precise Assignments helps students complete their coursework without difficulties at a given timeframe to let them succeed.",
    "Dissertation":
      "A dissertation is a lengthy report that needs to be completed by every student at the end of their semester. However, it might be complex sometimes but do not worry, as we are globally available to help you.",
    "Essay":
      "Essays are the trickiest tasks to be done for academics, which might trigger students at times. We can help students follow the proper structure of essays while meeting the brief requirements.",
    "Thesis/Report":
      "You don’t need to worry about your longer project reports because we are providing our most prominent services at affordable rates so you can get the benefit of it and ace your grades in your semester.",
  };

  return (
    <div className="px-10 mb-10">


     <div className="relative text-center mb-12">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-full max-w-lg h-12 bg-gradient-to-r from-yellow-300 via-primary to-yellow-600 transform rotate-1 blur-md rounded-lg"></div>
        </div>
        <h1 className="text-black font-bold text-4xl sm:text-5xl md:text-6xl">
          Our Services
        </h1>
      </div>
      <p className="px-10 font-medium leading-6 text-xl text-left text-gray-800 mb-4">
        ‘Precise Assignments’ can provide you with excellent editing services
        for your academic as well as creative writing projects. We can edit your
        creative writing in any form of English you like, including formal,
        casual, American, British, Canadian, and more. You won’t ever miss a
        deadline when working with us, and you’ll have professionally edited
        material that you can confidently submit for publication.
      </p>
      <p className="px-10 font-medium leading-6 text-xl text-left text-gray-800 mb-4">
        Our goal is to help you become the most excellent creative writer you
        can be by highlighting the best aspects of your distinct voice and
        writing style.
      </p>
      <p className="px-10 font-medium leading-6 text-xl text-left text-gray-800 mb-4">
        We provide a variety of services in addition to editing and
        proofreading. View all of our products or take a look at our customized
        packages for the following kinds of customers:
      </p>

      <div className="mt-10">

        <div className="flex justify-center mb-6 gap-4 flex-wrap">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-bold text-lg ${
                activeTab === tab
                  ? "bg-black text-primary"
                  : "bg-gray-300 text-gray-700"
              } hover:scale-105 hover:bg-black hover:text-primary transition-transform duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-yellow-200 border border-black shadow-xl rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 leading-6">{activeTab}</h2>
          <p className="text-lg text-gray-800 text-left">{tabContent[activeTab]}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
