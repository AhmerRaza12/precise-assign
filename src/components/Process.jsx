import React from "react";

const Process = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between my-20">
      <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-700 font-regular">
          STEPS
        </p>
        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          How Our <span className="text-primary">Process Works?</span>
        </h3>
      </div>

      <div className="mt-24">
        <ul className="md:grid md:grid-cols-3 md:col-gap-16 md:row-gap-16">
          <li className="p-5 pb-10 text-center mt-28 max-sm:mt-0">
            <div className="flex flex-col items-center">
              <div className="relative top-0 -mt-16">
                {/* Circle with dashed border */}
                <div className="relative">
                  <div
                    className="absolute inset-0 h-20 w-20 rounded-full border-2 border-dashed border-black"
                    style={{ transform: "scale(1.2)" }}
                  ></div>
                  {/* Main Circle */}
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4 border-black text-xl font-semibold">
                    1
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-2xl leading-6 font-semibold text-gray-900 mb-10">
                  Submit Requirements
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-700 text-center">
                  We will review your document and provide a customised quote.You can discuss your budget; we offer transparent pricing that
                  has no hidden costs.Editing and Proofreading starts.
                </p>
              </div>
            </div>
          </li>
          <li className="  p-5 pb-10 text-center max-sm:mt-10 max-md:mt-10">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                {/* Circle with dashed border */}
                <div className="relative">
                  <div
                    className="absolute inset-0 h-20 w-20 rounded-full border-2 border-dashed border-black"
                    style={{ transform: "scale(1.2)" }}
                  ></div>
                  {/* Main Circle */}
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4 border-black text-xl font-semibold">
                    2
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-2xl leading-6 font-semibold  text-gray-900 mb-10">
                  Fill Out the Form
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-700 text-center">
                  Our professional editors start modifying your document.We ensure structure, grammar check, formatting to meet the
                  brief standards.Delivery and feedback sharing.
                </p>
              </div>
            </div>
          </li>
          <li className="  p-5 pb-10 text-center mt-28 max-sm:mt-10 max-md:mt-10">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 relative top-0 -mt-16">
                {/* Circle with dashed border */}
                <div className="relative">
                  <div
                    className="absolute inset-0 h-20 w-20 rounded-full border-2 border-dashed border-black"
                    style={{ transform: "scale(1.2)" }}
                  ></div>
                  {/* Main Circle */}
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4 border-black text-xl font-semibold">
                    3
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-2xl leading-6 font-semibold  text-gray-900 mb-10">
                  Receive a Quote
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-700 text-center">
                  Receive the modified document within the agreed deadline.Review the edits, and then you may request revisions if
                  required.Final Delivery.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Process;
