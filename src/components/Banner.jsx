import React,{useEffect,useState} from "react";
import BgImage from "../assets/new-bg.png";
import SliderCarousel from "./SliderCarousel";
import axios from "axios";
// import ContactImage from "https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg";

const Banner = () => {
  const [userIp, setUserIp] = useState('');

  useEffect(()=>{
    fetch('https://api.ipify.org?format=json')
    .then((res) => res.json())
    .then((data) => {
      setUserIp(data.ip);
    })
    .catch(() => {
      setUserIp('Could not fetch IP');
    });
  },[])
  console.log(userIp);
  const userUrl = window.location.href;
  console.log(userUrl);
  const HandleSubmit = (e) => {
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
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
      <tr>
        <td><b>IP</b></td>
        <td>${userIp}</td>
      </tr>
      <tr>
        <td><b>User Entry</b></td>
        <td>${userUrl}</td>
      </tr>
    </table>
    `;
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("email", e.target.email.value);
    formdata.append("phone", e.target.phone.value);
    formdata.append("requirements", e.target.requirements.value);
    const data={
      service_id: service_id,
      template_id: template_id,
      user_id: user_id,
      template_params: {
        message: messageContent,
        from_name: `Precise Assignments`,
    }
  }
    axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((res) => {
      console.log(res);
      if(res.status === 200){
        alert("Thank you for contacting us, We will be back to you shortly.");
        e.target.reset();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <section className="bg-primary text-white relative ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:p-6 sm:p-6 s">
          <div className="md:w-1/2 mb-10 md:mb-0 mt-4">
            <h1 className="font-bold text-3xl text-black mb-2 md:text-3xl lg:text-4xl leading-[50px] max-sm:text-center max-sm:text-2xl">
              We adore your words here at
              <p className="text-secondary text-3xl md:text-4xl  mb-4 max-sm:text-center max-sm:text-3xl">
                Precise Assignments
              </p>
            </h1>
            <p className="text-xl mb-4 text-gray-800 pr-2 max-sm:text-center max-sm:text-sm">
              Whether it is{" "}
              <span className="text-white">
                professional editing, proofreading, presentation{" "}
              </span>
              or <span className="text-white">question paper,</span> we love the
              formal styling of these words. We also know how to help students
              and professionals use scholarly words more effectively.
            </p>
            <button className="bg-black text-primary font-bold py-3 px-6 rounded hover:bg-white hover:text-black transform hover:scale-125 transition duration-300 ease-in-out text-center text-sm 
  max-sm:flex max-sm:mx-auto max-sm:justify-center max-sm:py-2 max-sm:px-4 max-sm:text-sm">
  Get Started
</button>
            <div className="mt-10 lg:col-start-2  max-sm:mt-4">
              <p className=" font-semibold leading-6 text-white uppercase max-sm:text-center max-sm:text-sm ">
                Our skilled proofreaders have already helped
              </p>
              <h4 className=" text-2xl font-extrabold leading-8 text-black sm:text-4xl sm:leading-9 uppercase mt-2 max-sm:text-center max-sm:text-xl max-sm:mt-1">
                over 10,000 clients
              </h4>

              <ul className="mt-8 space-y-2 font-semibold max-sm:mt-2 max-sm:p-4">
                <li className="flex items-start lg:col-span-1 max-sm:flex-row max-sm:items-center max-sm:justify-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 leading-6 text-black"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-2 leading-6 text-gray-800 text-lg  max-sm:text-sm">
                    We have turned our client's expectations into reality while
                    providing proficient documents as required, and we would be
                    honoured to gain your trust as well.
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 leading-6 text-black"
                      fill="black"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-2 leading-6 text-gray-800 text-lg z-[999999] max-sm:text-sm">
                    We can support your success in the academic world since we
                    value the choice of words!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={BgImage}
              alt="Hero"
              className="w-full rounded-xl justify-center mx-auto h-full bg-center object-fill "
            />
          </div>
        </div>
        <div className="relative m-0">
  <div className="bg-primary h-4 w-full overflow-hidden ">
    <div
      className="absolute top-[-90%] left-0 w-full h-[94px] z-[9999]"
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
      </section>

      
<section className="mt-32 max-sm:mt-20">
  <SliderCarousel />
</section>

      <section className="bg-white py-6 mt-12 px-8 max-sm:mt-6">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl text-center text-black font-bold bg-primary px-4 py-2 rounded-lg shadom-lg inline-block max-sm:text-3xl">
            Contact Us
          </h1>
        </div>
        <p className="text-center text-lg text-gray-black font-medium mt-2 tracking-wider uppercase leading-5 max-sm:text-sm ">
          No upfront payment - upto 20% off
        </p>
        <form
        onSubmit={HandleSubmit} 
        className="flex flex-wrap justify-center items-center my-10 max-w-5xl mx-auto max-sm:my-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2 max-sm:mb-3 max-sm:py-1">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black max-sm:mb-2 max-sm:py-3 max-sm:px-2 max-sm:text-sm"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name*"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2 max-sm:mb-3 max-sm:py-1">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black max-sm:mb-2 max-sm:py-3 max-sm:px-2 max-sm:text-sm"
              id="email"
              name="email"
              type="text"
              required
              placeholder="Your Email*"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-2 max-sm:mb-3 max-sm:py-1">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black max-sm:mb-2 max-sm:py-3 max-sm:px-2 max-sm:text-sm"
              id="phone"
              name="phone"
              type="text"
              required
              placeholder="Your Phone*"
            />
          </div>
          <div className="w-full px-3 py-2 max-sm:mb-3 max-sm:py-1 max-sm:row-span-4">
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border-2 border-dashed border-gray-300 rounded-md py-5 px-4 mb-3 leading-tight focus:outline-none focus:border-black max-sm:mb-2 max-sm:py-3 max-sm:px-2 max-sm:text-sm"
              rows="8"
              id="requirements"
              name="requirements"
              placeholder="Additional Requirements"
            ></textarea>
          </div>

<div className="w-full text-center">
      <button 
        className="bg-white hover:bg-primary text-black font-bold text-xl max-sm:text-lg max-sm:px-8 max-sm:py-2 py-4 px-16 border-[3px] border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg duration-500" 
        type="submit"
      >
        Send Message
      </button>
    </div>
        </form>
      </section>

    </>
  );
};

export default Banner;
