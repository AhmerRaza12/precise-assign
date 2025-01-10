import React from 'react'

const GetInTouch = () => {
    return (
        <section className="bg-white overflow-visible py-10 mt-32 mb-4">
            <div className="text-white items-center  flex flex-col">
                <h2 className="font-bold text-center text-2xl lg:text-6xl text-primary ">Get In Touch With Us!</h2>
                <p className=" mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-500">
                    We cover all time zones and are available around the clock because our editors are from all around the English-speaking world. We are confident that we can handle any editing requirements you may have because our proofreaders are experts with extensive editing expertise.
                </p>
                <a className="mt-4 bg-primary px-4 py-2 text-base font-semibold leading-7 text-black hover:bg-black  border-2   border-black hover:text-primary duration-500 ease-in-out transition focus:outline-none focus:ring border-spacing-5 focus:border-black hover:border-black"
                    href="/">Get Started Now</a>
            </div>
        </section>
    )
}

export default GetInTouch