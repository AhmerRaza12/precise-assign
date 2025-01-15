import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { CiMedicalCase } from "react-icons/ci";
import { GiMaterialsScience } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";

const SubjectsWeOffer = () => {
  const subjectsInfo = [
    {
      title: "Business Management",
      description:
        "Refine your business essays and ace assignments with Precise Assignments' services.",
      Icon: <MdLibraryBooks />,
    },
    {
      title: "Computer Science",
      description:
        "Simplify technical writing and perfect your technical assignments with Precise Assignments.",
      Icon: <FaComputer />,
    },
    {
      title: "Engineering",
      description:
        "Get professionally written engineering essays and precise proofreading with Precise Assignments.",
      Icon: <MdOutlineEngineering />,
    },
    {
      title: "Finance & Accounting",
      description:
        "Polish your finance reports and accounting essays with our expert assistance at Precise Assignments.",
      Icon: <MdOutlineManageAccounts />,
    },
    {
      title: "Law",
      description:
        "Ensure your legal assignments and case studies are flawless with Precise Assignments' academic services.",
      Icon: <GoLaw />,
    },
    {
      title: "Medical / Nursing",
      description:
        "Perfect your medical essays, nursing assignments, and research papers with Precise Assignments.",
      Icon: <CiMedicalCase />,
    },
    {
      title: "Social Sciences",
      description:
        "Make your social sciences papers shine with expert academic help from Precise Assignments.",
      Icon: <GiMaterialsScience />,
    },
    {
      title: "English Literature",
      description:
        "Craft compelling essays and analyze texts perfectly with Precise Assignments' academic services.",
      Icon: <RiEnglishInput />,
    },
  ];

  return (
    <div className="mt-32 mb-10 max-sm:mt-24">
      <div className="flex justify-center items-center mb-10 max-sm:mb-6">
        <h1 className="text-5xl max-sm:text-3xl max-sm:px-2 max-sm:py-1 text-center text-black font-bold bg-primary px-4 py-2 rounded-lg shadow-lg inline-block">
          Subjects We Offer
        </h1>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto max-sm:max-w-xs max-sm:gpa-3 max-sm:px-2">
        {subjectsInfo.map((subject, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center gap-4 max-sm:gap-2 p-6 max-sm:p-3 rounded-lg  hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <div className="relative w-20 h-20 max-sm:w-14 max-sm:h-14">
              <div
                className=" w-full h-full flex items-center justify-center bg-primary"
                style={{
                  WebkitMaskImage: "url('https://owly.wpenginepowered.com/wp-content/plugins/designthemes-core-features/shortcodes/images/pentagon.png')",
                  maskImage: "url('https://owly.wpenginepowered.com/wp-content/plugins/designthemes-core-features/shortcodes/images/pentagon.png')",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  backgroundColor: "#fcd51e",
                }}
              >
                <span className="text-3xl text-black max-sm:text-2xl ">{subject.Icon}</span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 max-sm:text-sm">
              {subject.title}
            </h4>
            <p className="text-sm text-gray-600 max-sm:text-xs">{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsWeOffer;
