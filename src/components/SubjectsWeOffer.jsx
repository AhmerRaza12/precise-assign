import React from "react";

const SubjectsWeOffer = () => {
  const subjects = [
    "Business Management",
    "Computer Science",
    "Engineering",
    "Finance & Accounting",
    "Law",
    "Medical / Nursing",
    "Social Sciences",
    "English Literature",
  ];

  return (
    <div className="my-20">
      <h1 className="text-center text-5xl font-bold text-primary my-10 uppercase">
        Subjects We Offer
      </h1>

  
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

        {subjects.slice(0, 3).map((subject, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-black text-primary font-bold rounded-md text-lg"
          >
            {subject}
          </span>
        ))}

        {subjects.slice(3, 5).map((subject, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-black text-primary font-bold rounded-md text-lg"
          >
            {subject}
          </span>
        ))}


        {subjects.slice(5,8).map((subject, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-black text-primary font-bold rounded-md text-lg"
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SubjectsWeOffer;
