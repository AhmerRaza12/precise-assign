import React,{useState,useEffect} from "react";
import "./CourseWork.css";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import axios from "axios";
import GetInTouch from "../components/GetInTouch";
import SubjectsWeOffer from "../components/SubjectsWeOffer";
import Process from "../components/Process";
const Essay = () => {
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
    },[]);
    const emailjs_userid = 'B1OYlWtB3Y7TdoSP7';
    const emailjs_templateid = 'template_j7jq8i9';
    const emailjs_serviceid = 'service_g675ycm';
  console.log(userIp);
  const userUrl = window.location.href;
  console.log(userUrl);
  const HandleSubmit = (e) => {
    const messageContent= `
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
    const data ={
      service_id: emailjs_serviceid,
      template_id: emailjs_templateid,
      user_id: emailjs_userid,
      template_params:{
        message: messageContent,
        from_name: `Precise Assignments`,
      }
    }
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("email", e.target.email.value);
    formdata.append("phone", e.target.phone.value);
    formdata.append("requirements", e.target.requirements.value);
  //   .then((res) => {
  //     console.log(res);
  //     if(res.data.status === 200){
  //       alert(res.data.message);
  //     }
  //     else{
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // };
  axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
  .then((res) => {
    console.log(res);
    if(res.status === 200){
      alert("Thank you for contacting us. We will reach back");
      e.target.reset();
    }
    else{
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
  return (
    <>
      <section className="bg-black bg-banner-pattern bg-cover bg-center dark:bg-blue-900 py-12 sm:py-20 relative main-title-section-wrapper">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 sm:mb-6 dark:text-white">
            Hold on, are you concerned
            <span className="text-primary tracking-wide border-b-2 py-1 border-primary ml-2 ">
              about the Budget?
            </span>
          </h2>
        </div>

        <div className="container mx-10 px-6 flex flex-wrap items-center ">
          <div className="w-full md:w-1/2 md:mr-28">
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white mb-2">
              Concerns over the price of academic services are shared by all
              professionals and students who utilise essay services. However,
              the cost of our professional editing and proofreading services is
              affordable. Because we think that every student has the right to
              ask for assistance in order to excel academically, we provide
              affordable essay proofreading and editing services. Our experts
              are not limited to a single field of expertise. They can help you
              with research on any subject from a variety of academic fields.
              They will make every effort to meet your demands and preferences.
            </p>
            <button className="mt-2 items-center flex justify-center mx-auto bg-white text-black font-bold py-3 px-6 rounded  hover:text-black hover:bg-primary transition duration-500 ease-in-out">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-2/5 p-6 ">
            <div className="bg-white  p-6 rounded-lg shadow-xl border-2 border-dashed border-black ">
              <h2 className="text-primary text-3xl text-center  leading-8  font-bold mb-1">
                NO UPFRONT PAYMENT
              </h2>

              <p className="text-center text-gray-900 font-semibold mb-4 leading-4">
                Up To 20% Off
              </p>

              <form 
              onSubmit={HandleSubmit}
              className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Your Name *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      required
                      name="phone"
                      placeholder="Your Phone *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      required
                      name="email"
                      placeholder="Your Email *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={1}
                      id="requirements"
                      placeholder="Your Requirements"
                      type="text"
                      name="requirements"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    ></textarea>
                  </div>
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
        </div>
      </section>
      <AboutSection />
      <Services />
      <SubjectsWeOffer />
      <GetInTouch /> 
      <Process />
    </>
  );
};

export default Essay;
