import React from 'react'

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
        <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4  text-xl font-semibold border-black">
                            1
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-2xl leading-6 font-semibold  text-gray-900 mb-10">Submit Requirements</h4>
                        <p className="mt-2 text-base leading-6 text-gray-700 text-left">
                        We will review your document and provide a customised quote.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">You can discuss your budget; we offer transparent pricing that has no hidden costs.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">
                        Editing and Proofreading starts.
                        </p>
                    </div>
                </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4  text-xl font-semibold border-black">
                            2
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-2xl leading-6 font-semibold  text-gray-900 mb-10">Fill Out the Form</h4>
                        <p className="mt-2 text-base leading-6 text-gray-700 text-left">
                        Our professional editors start modifying your document.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">We ensure structure, grammar check, formatting to meet the brief standards.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">
                        Delivery and feedback sharing.
                        </p>
                    </div>
                </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-black border-4  text-xl font-semibold border-black">
                            3
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-2xl leading-6 font-semibold  text-gray-900 mb-10">Receive a Quote</h4>
                        <p className="mt-2 text-base leading-6 text-gray-700 text-left">
                        Receive the modified document within the agreed deadline.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">Review the edits, and then you may request revisions if required.</p>
                        <p className="mt-2 text-base text-left leading-6 text-gray-700">
                        Final Delivery.
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    </div>

</div>
  )
}

export default Process