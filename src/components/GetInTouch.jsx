import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
// import { IoMdMail } from "react-icons/io";

const GetInTouch = () => {
    return (
<section className="bg-primary overflow-visible py-10 mt-10 mb-4 bg-get-in-touch-bg bg-left">
  <div className="flex flex-row justify-center items-center gap-4 my-24">
    
    {/* Left Section - 30% Width */}
    <div className="w-[35%] hidden md:flex flex-col items-center justify-center">
      <div className="pl-16 md:h-[350px] h-[350px]">
        <img
          src="https://img.freepik.com/free-photo/portrait-young-handsome-business-man-thoughtful-male-dressed-blue-jeans-shirt-bearded-model-posing-office-near-paper-desk-speaking-phone_158538-17487.jpg"
          alt="Team Meeting"
          className="object-cover h-full w-full rounded-md shadow-lg border-8 border-black"
        />
      </div>
    </div>
    
    {/* Right Section - 70% Width */}
    <div className="text-white flex flex-col md:w-[65%] w-full md:ml-6">
      <h2 className="font-bold text-left text-xl lg:text-4xl text-black">
        Get In Touch With Us!
      </h2>
      <p className="mt-6 max-w-4xl text-lg md:text-xl leading-6 text-black font-medium">
        We cover all time zones and are available around the clock because our editors are from all around the English-speaking world. We are confident that we can handle any editing requirements you may have because our proofreaders are experts with extensive editing expertise.
      </p>

      {/* Contact Information */}
      <div className="flex justify-start gap-8 mt-6">
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-2xl text-black" />
          <p className="text-lg text-black font-medium">
            20, 22 Wenlock Rd,
            <span className="block text-sm"> London N1 7GU, UK </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IoCall className="text-2xl text-black" />
          <p className="text-lg text-black font-medium">+44 2039657942</p>
        </div>
      </div>

    
      <a
        className="mt-6 bg-white text-black px-6 py-4 w-[200px]   text-base font-semibold leading-7 rounded-md  hover:bg-black hover:text-primary  border-2 border-black duration-500 ease-in-out transition focus:outline-none focus:ring focus:border-black text-center"
        href="/"
      >
        Get Started Now
      </a>
    </div>
    
  </div>
</section>
    )
}

export default GetInTouch