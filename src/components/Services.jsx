import React, { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("Coursework");

  const tabsInfo = [
    {
      title: "Coursework",
      description:
        "Coursework might seem very dry for some students, which is also time-taking to be completed. Precise Assignments helps students complete their coursework without difficulties at a given timeframe to let them succeed.",
      image:
        "https://img.freepik.com/free-photo/students-preparing-exam-together_23-2147844867.jpg",
    },
    {
      title: "Dissertation",
      description:
        "A dissertation is a lengthy report that needs to be completed by every student at the end of their semester. However, it might be complex sometimes but do not worry, as we are globally available to help you.",
      image:
        "https://img.freepik.com/free-photo/faceless-man-making-notes-book_23-2147779360.jpg",
    },
    {
      title: "Essay",
      description:
        "Essays are the trickiest tasks to be done for academics, which might trigger students at times. We can help students follow the proper structure of essays while meeting the brief requirements.",
      image:
        "https://img.freepik.com/premium-photo/close-up-university-students-writing-note-notebook-classroom-while-listening-studying-lecture-close-up-woman-s-hands-writing-notepad-placed-wooden-desktop_201468-593.jpg?w=760",
    },
    {
      title: "Thesis/Report",
      description:
        "You don’t need to worry about your longer project reports because we are providing our most prominent services at affordable rates so you can get the benefit of it and ace your grades in your semester.",
      image:
        "https://img.freepik.com/premium-photo/asian-woman-is-writing-work-into-paper-which-it-put-desk-office-room_477666-1730.jpg?w=900",
    },
  ];

  const activeTabData = tabsInfo.find((tab) => tab.title === activeTab);

  return (
    <>
    <div className="px-10 max-sm:px-6 bg-primary pt-10">
      <div className="text-center mb-6 max-sm:mb-4">
        <h1 className="text-black font-bold text-4xl sm:text-5xl md:text-6xl max-sm:text-2xl max-sm:leading-5">
          Our Services
        </h1>
      </div>
      <p className="px-10 max-sm:px-4 font-medium leading-6 max-sm:leading-5 text-xl text-left text-black mb-4 max-sm:text-sm max-sm:mb-2">
        ‘Precise Assignments’ can provide you with excellent editing services
        for your academic as well as creative writing projects. We can edit your
        creative writing in any form of English you like, including formal,
        casual, American, British, Canadian, and more. You won’t ever miss a
        deadline when working with us, and you’ll have professionally edited
        material that you can confidently submit for publication.
      </p>
      <p className="px-10 max-sm:px-4 font-medium leading-6 text-xl text-left text-black mb-4 max-sm:text-sm max-sm:mb-2">
        Our goal is to help you become the most excellent creative writer you
        can be by highlighting the best aspects of your distinct voice and
        writing style.
      </p>
      <p className="px-10 max-sm:px-4 font-medium leading-6 text-xl text-left text-black mb-4 max-sm:text-sm max-sm:mb-2">
        We provide a variety of services in addition to editing and
        proofreading. View all of our products or take a look at our customized
        packages for the following kinds of customers:
      </p>

      <div className="max-sm:mt-6 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-sm:gap-6 items-start">
  {/* Image Section */}
  <div className="flex justify-center w-full md:h-[400px] max-sm:h-[300px] lg:order-1 max-sm:order-2">
    <img
      src={activeTabData?.image}
      alt={activeTab}
      className="rounded-lg shadow-lg w-full h-full object-cover bg-center"
    />
  </div>

  {/* Tabs and Content Section */}
  <div className="lg:order-2 max-sm:order-1">
    <div className="flex justify-center mb-6 gap-4 max-sm:gap-2 max-sm:mb-4 flex-wrap">
      {tabsInfo.map((tab) => (
        <button
          key={tab.title}
          onClick={() => setActiveTab(tab.title)}
          className={`px-6 py-3 rounded-xl font-bold text-lg max-sm:text-sm max-sm:py-2 max-sm:px-4 ${
            activeTab === tab.title
              ? "bg-black text-primary"
              : "bg-white text-black"
          } hover:scale-105 hover:bg-black hover:text-primary transition-transform duration-300`}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="bg-white border-dashed border-2 border-black shadow-xl rounded-lg p-8 max-sm:p-6">
      <h2 className="text-3xl font-bold mb-2 text-center max-sm:text-xl ">{activeTab}</h2>
      <p className="text-lg text-gray-800 max-sm:text-sm">{activeTabData?.description}</p>
    </div>
  </div>
</div>
    </div>
        <div className="relative">
        <div className="bg-primary  w-full overflow-hidden">
          <div
            className="absolute top-full left-0 w-full h-[94px] z-[999999]"
            style={{
              maskImage: "url('https://owly.wpenginepowered.com/wp-content/themes/owly/images/slider-bottom-pattern.png')",
              WebkitMaskImage: "url('https://owly.wpenginepowered.com/wp-content/themes/owly/images/slider-bottom-pattern.png')",
              maskPosition: "left top",
              WebkitMaskPosition: "left top",
              transform: "rotate(180deg)",
              backgroundColor: "#fcd51e",
            }}
          ></div>
        </div>
      </div>
      </>
  );
};

export default Services;
