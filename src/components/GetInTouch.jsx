import React from 'react'

const GetInTouch = () => {
    return (
        <section className="bg-black overflow-visible py-10 my-4">
            <div className="text-white items-center  flex flex-col">
                <h2 className="font-bold text-center text-2xl lg:text-6xl text-primary ">Get In Touch With Us!</h2>
                <p className=" mt-6 max-w-4xl text-lg md:text-xl leading-8 text-gray-500">
                    We cover all time zones and are available around the clock because our editors are from all around the English-speaking world. We are confident that we can handle any editing requirements you may have because our proofreaders are experts with extensive editing expertise.
                </p>
                <a className="mt-4 bg-primary px-4 py-2 text-base font-semibold leading-7 text-black hover:bg-white hover:text-primary duration-500 ease-in-out transition focus:outline-none focus:ring focus:border-blue-300"
                    href="/">Get Started Now</a>
            </div>
        </section>
    )
}

export default GetInTouch