import React,{useEffect,useState} from "react";
import "./CourseWork.css";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import axios from "axios";
import GetInTouch from "../components/GetInTouch";
import SubjectsWeOffer from "../components/SubjectsWeOffer";
import Process from "../components/Process";
const Dissertation = () => {
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
  console.log(userIp);
  const userUrl = window.location.href;
  console.log(userUrl);

  const emailjs_userid = process.env.REACT_APP_EMAILJS_USER_ID;
  const emailjs_templateid = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailjs_serviceid = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const HandleSubmit = (e) => {
    e.preventDefault();
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
    const formdata = new FormData();
    formdata.append("name", e.target.name.value);
    formdata.append("email", e.target.email.value);
    formdata.append("phone", e.target.phone.value);
    formdata.append("requirements", e.target.requirements.value);

  axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
  .then((res) => {
    console.log(res.status);
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
            Is the due date for your
            <span className="text-primary tracking-wide border-b-2 py-1 border-primary ml-2 ">
              Research thesis approaching?
            </span>
          </h2>
        </div>

        <div className="container mx-10 px-6 flex flex-wrap ">
          <div className="w-full md:w-1/2 md:mr-28">
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white mb-2">
              We understand how most students or professionals feel because
              balancing university work, extracurricular activities, and
              personal lives may be challenging. Students typically struggle
              with time management since they have a lot to do in life and time
              is running out. Deadlines must be fulfilled in order to earn a
              respectable grade. Therefore, if you’re feeling lost and have
              little time, give us a chance to help you get past this obstacle.
            </p>
            <p className="text-md sm:text-lg text-white font-medium leading-4 dark:text-white">
              Our knowledgeable team of professionals is ready to cover for you
              and provide an excellent research thesis on any topic in a timely
              manner. Given that, how crucial it is to fulfil deadlines, you are
              in capable hands with the Precise Assignments. We commit to delivering
              the research thesis on time. No matter how much time remains, the
              research thesis will be of exceptional quality. We are
              appreciative of our interdisciplinary team of experts who dedicate
              their time to meeting the needs of our clients.
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
                      name="name"
                      placeholder="Your Name *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Your Phone *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your Email *"
                      className="w-full bg-white text-black  placeholder:text-gray-500  border-2 border-dashed border-gray-500 p-3 rounded-lg focus:border-dashed  outline-none focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={1}
                      id="requirements"
                      name="requirements"
                      placeholder="Your Requirements"
                      type="text"
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

export default Dissertation;
