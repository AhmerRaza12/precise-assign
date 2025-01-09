import React from 'react'
import './Order.css'
// import { MdOutlineFileUpload } from "react-icons/md";
import FileUpload from '../components/FileUpload';

const Order = () => {
return(
<div>
<section className="bg-primary dark:bg-blue-900 py-12 sm:py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 sm:mb-8 dark:text-white uppercase">Order Now</h2>

  </div>
</section>

<div className="wave-divider dark:bg-gray-800">
  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-primary dark:fill-blue-900"></path>


    {/* <path d="M0,30c100-20,200-40,320-26,80,10,160,40,240,50,100,15,200,0,320-20,100-16,220-25,320-5" 
      fill="none" stroke="white" stroke-width="2" stroke-dasharray="6,6" /> */}


    <path d="M0,45c90-25,200-30,320-28,90,2,160,20,240,35,100,25,200,25,320,0,120-20,200-35,320-18" 
      fill="none" stroke="black" stroke-width="1.5" stroke-dasharray="5,5" />
  </svg>
</div>

<section className="bg-white py-6 px-8">
    {/* form inside a container with text place an order now in text-primary as heading of the form and the fields name email inline divided width in half form has max-w-4xl */}

    <div className="container  p-6 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-primary mb-4">Place an Order Now</h2>
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name*</label>
                    <input type="text" required id="name" placeholder="Enter your name" className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email*</label>
                    <input type="email" required id="email" placeholder="Enter your email" className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="block text-gray-800 font-semibold mb-1">Contact Number*</label>
                    <input type="tel" required id="phone" placeholder="Enter your phone number" className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary" />
                </div>
                <div>
  <label htmlFor="words" className="block text-gray-800 font-semibold mb-1">
    Number of Words*
  </label>
  <input
    type="number"
    required
    id="words"
    placeholder="Enter number of words"
    className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
  />
</div>
            </div>
            {/* Topic and Document Type fields with half width divided, Document Type options[Select Document Type ,Annotated Bibliography, Article, Assignment, Book Review, Business Plan, Case Study,CV Cover Letter, Dissertation] */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="topic" className="block text-gray-800 font-semibold mb-1">Topic</label>
                    <input type="text"  id="topic" placeholder="Enter your topic" className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary" />
                </div>
                <div>
                    <label htmlFor="documentType" className="block text-gray-800 font-semibold mb-1">Document Type</label>
                    <select id="documentType" className="w-full bg-black text-primary p-4 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary">
                        <option className='text-gray-500' disabled selected="selected">Select Document Type</option>
                        <option>Annotated Bibliography</option>
                        <option>Article</option>
                        <option>Assignment</option>
                        <option>Book Review</option>
                        <option>Business Plan</option>
                        <option>Case Study</option>
                        <option>CV Cover Letter</option>
                        <option>Dissertation</option>
                        <option>Essay</option>
                        <option>Lab Report</option>
                        <option>Marketing Plan</option>
                        <option>Poster</option>
                        <option>Presentation</option>
                        <option>Proofreading and Editing</option>
                        <option>Report</option>
                        <option>Research Paper</option>
                        <option>Research Proposal</option>
                        <option>Research Topic</option>
                        <option>Quiz</option>
                    </select>
                </div>
            </div>

            {/* Urgency Field with options[Choose Urgency, 2 Hours, 4 Hours, 6 Hours, 12 Hours, 24 Hours, 48 Hours] and Spacing with radio options Single Spacing or Double Spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="urgency" className="block text-gray-800 font-semibold mb-1">Urgency</label>
                    <select id="urgency" className="w-full bg-black text-primary p-4 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary">
                        <option className='text-gray-500' disabled selected="selected">Choose Urgency</option>
                        <option value="2 Hours">2 Hours</option>
                        <option value="4 Hours">4 Hours</option>
                        <option value="6 Hours">6 Hours</option>
                        <option value="12 Hours">12 Hours</option>
                        <option value="24 Hours">24 Hours</option>
                        <option value="48 Hours">48 Hours</option>
                        <option value="7 Days">7 Days</option>
                        <option value="10 Days">10 Days</option>
                        <option value="30 Days">30 Days</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="spacing" className="block text-gray-800 font-semibold mb-1">Spacing</label>
                    <div className=" flex flex-col  gap-2">
                        <label htmlFor="single" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="single" name="spacing" className="mr-2  space-y-2" />
                            Single Spacing
                        </label>
                        <label htmlFor="double" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="double" name="spacing" className="mr-2" />
                            Double Spacing
                        </label>
                    </div>
                </div>
            </div>
            {/* Reference Style with radio options [APA, Chicago, Harvard,MLA, Oscola, Vancouver] and Academic Level with radio options[High Level, Undergraduate, Masters, PhD] */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
  <label htmlFor="referenceStyle" className="block text-gray-800 font-semibold mb-1">
    Reference Style
  </label>
  <div className="flex flex-col gap-2">
    <label htmlFor="apa" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="apa"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      APA
    </label>
    <label htmlFor="chicago" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="chicago"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      Chicago
    </label>
    <label htmlFor="harvard" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="harvard"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      Harvard
    </label>
    <label htmlFor="mla" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="mla"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      MLA
    </label>
    <label htmlFor="oscola" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="oscola"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      Oscola
    </label>
    <label htmlFor="vancouver" className="flex items-center leading-5 text-base text-gray-800 font-medium">
      <input
        type="radio"
        id="vancouver"
        name="referenceStyle"
        className="mr-2 border-2 border-black checked:bg-primary checked:border-black w-4 h-4 rounded-full focus:outline-none"
      />
      Vancouver
    </label>
  </div>
</div>
                
                
                <div>
                    <label htmlFor="academicLevel" className="block text-gray-800 font-semibold mb-1">Academic Level</label>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="high" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="high" name="academicLevel" className="mr-2" />
                            High Level
                        </label>
                        <label htmlFor="undergraduate" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="undergraduate" name="academicLevel" className="mr-2" />
                            Undergraduate
                        </label>
                        <label htmlFor="masters" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="masters" name="academicLevel" className="mr-2" />
                            Masters
                        </label>
                        <label htmlFor="phd" className="flex items-center leading-5 text-base text-gray-800 font-medium">
                            <input type="radio" id="phd" name="academicLevel" className="mr-2" />
                            PhD
                        </label>
                    </div>
                </div>
              

            </div>
            <div>
                    <FileUpload />

                </div>
                {/* Order Description Text area */}
                <div>
                    <label htmlFor="orderDescription" className="block text-gray-800 font-semibold mb-1">Order Description</label>
                    <textarea id="orderDescription" placeholder="Enter your order description" className="w-full bg-black text-primary placeholder-text-yellow-100 p-3 rounded-lg border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary"
                    rows={3}
                    ></textarea>
                </div>
            <button type="submit" className="w-full bg-primary text-black font-bold text-lg p-3 rounded-lg hover:bg-black hover:text-primary duration-300 ease-in-out">Submit</button>
        </form>
    </div>
</section>

</div>
)
}

export default Order