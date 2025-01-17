import React from 'react'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { HiMapPin } from "react-icons/hi2";
import axios from "axios";
const Contact = () => {
  const emailjs_userid = process.env.REACT_APP_EMAILJS_USER_ID;
  const emailjs_templateid = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailjs_serviceid = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  console.log(emailjs_userid,emailjs_templateid,emailjs_serviceid);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", e.target.name.value);

    const messageContent = `
    <table border="1" cellspacing="0" cellpadding="8">
      <tr>
        <td><b>Name</b></td>
        <td>${e.target.name.value}</td>
      </tr>
      <tr>
        <td><b>Email</b></td>
        <td>${e.target.email.value}</td>
      </tr>
      <tr>
        <td><b>Phone</b></td>
        <td>${e.target.phone.value}</td>
      </tr>
      <tr>
        <td><b>Requirements</b></td>
        <td>${e.target.requirements.value}</td>
      </tr>
    </table>
    `;
    const data={
      service_id: emailjs_serviceid,
      template_id: emailjs_templateid,
      user_id: emailjs_userid,
      template_params: {
        message: messageContent,
        to_email: `${e.target.email.value}`,
        from_name: `help@preciseassignments.co.uk`,
    }
    }
    formdata.append("email", e.target.email.value);
    formdata.append("phone", e.target.phone.value);
    formdata.append("requirements", e.target.requirements.value);
    // axios.post("http://localhost:3001/send-email", formdata)
    // .then((res) => {
    //   console.log(res);
    //   if(res.data.status === 200){
    //     alert(res.data.message);
    //   }
    //   else{
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((res) => {
      console.log(res);
      if(res.data.status === 200){
        alert("Thank you for contacting us. We will reach back");
      }
      else{
      }
    });
  };

  return (
    <>
    <section className="bg-primary dark:bg-blue-900 py-12 sm:py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 sm:mb-8 dark:text-white">Contact Us</h2>

  </div>
</section>

<div className="wave-divider dark:bg-gray-800">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary dark:fill-blue-900"></path>
    
  </svg>
</div>

<section className="bg-white py-6 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-4">

        <div className="md:w-1/2 mb-10 md:mb-0">
        <p className=" font-semibold leading-6 text-primary uppercase tracking-wide">
    We are here to help you out
    </p>
    <h4 className=" text-3xl font-extrabold leading-6 text-black sm:text-4xl sm:leading-9 uppercase ">
    React out for Better Assistance
    </h4>
    <p className='font-normal text-lg text-gray-600 text-left mt-4'>
    Our representatives are available 24/4 through live chat to help you out with your queries. You can also fill out the contact form to reach us. Our customer support will get back to you as soon as possible.
    </p>
    
    <ul className="flex flex-col space-y-4 mt-8">
        <li className="flex items-center gap-2">
            <CiMail className="text-primary text-2xl"/>
            <Link to="mailto:help@theprecisepaper.co.uk" className="text-gray-600 hover:text-black duration-300">
            help@theprecisepaper.co.uk
            </Link>
        </li>
        <li className="flex items-center gap-2">
            <FaPhoneAlt className="text-primary text-2xl"/>
            <Link to="tel:+442039657942" className="text-gray-600 hover:text-black duration-300">
            +44 2039657942
            </Link>
        </li>
        <li className="flex items-center gap-2">
            <FaWhatsapp className="text-primary text-2xl"/>
            <Link to="https://wa.me/442039657942?text=." className="text-gray-600 hover:text-black duration-300">
            +44 2039657942
            </Link>
        </li>
        <li className="flex items-center gap-2">
            <SlGlobe className="text-primary text-2xl"/>
            <Link to="https://theprecisepaper.co.uk" className="text-gray-600 hover:text-black duration-300">
            theprecisepaper.co.uk
            </Link>
        </li>
        <li className="flex items-center gap-2">
            <HiMapPin className="text-primary text-2xl"/>
            <Link to="https://www.google.com/maps/place/20-22+Wenlock+Rd,+London+N1+7GU,+UK/@51.530613,-0.0935057,17z/data=!3m1!4b1!4m5!3m4!1s0x48761ca0ab2ddc0b:0xe07efba243f983f1!8m2!3d51.530613!4d-0.0935057" className="text-gray-600 hover:text-black duration-300">
            20, 22 Wenlock Rd, London N1 7GU, UK
            </Link>
        </li>
    </ul>

    {/* Embed map with a rounded-md and not that big */}
    {/* <iframe loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom"></iframe> */}
    <iframe 
    loading="lazy"
    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near"
    title="London Eye, London, United Kingdom"
    aria-label="London Eye, London, United Kingdom"
    className=" h-64 rounded-xl px-10 w-full mt-4 "
    ></iframe>

          
        </div>
        <div className="md:w-2/5 bg-white  p-8 rounded-lg shadow-xl border-2 border-dashed border-black">
          <h2 className="text-black text-3xl  text-center leading-8  font-bold mb-1">
          Get In Touch
          </h2>
 
          <p className="text-center text-gray-900 font-semibold mb-6 leading-4">
          Up To 20% Off
          </p>
          <form 
          onSubmit={HandleSubmit}
          className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-primary font-semibold mb-1"
              >
                Name*
              </label>
              <input
                required
                type="text"
                id="name"
                name='name'
                placeholder="Enter your name"
                className="w-full bg-black text-primary placeholder:text-yellow-100 p-3 rounded-lg  border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              />
            </div>

       
            <div>
              <label
                htmlFor="phone"
                className="block text-primary font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                required
                name='phone'
                placeholder="Enter your phone number"
                className="w-full bg-black text-primary placeholder:text-yellow-100 p-3 rounded-lg  border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-primary font-semibold mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name='email'
                required
                placeholder="Enter your email"
                className="w-full bg-black text-primary placeholder:text-yellow-100 p-3 rounded-lg  border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="requirements"
                className="block text-primary font-semibold mb-2"
              >
                Additional Requirements
              </label>
              <textarea
              rows={3}
                id="requirements"
                placeholder=" "
               type="text"
               name='requirements'
                className="w-full bg-black text-primary placeholder:text-yellow-100 p-3 rounded-lg  border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              ></textarea>
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
    </section>


</>
  )
}

export default Contact