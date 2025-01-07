import React from 'react'

const Navbar = () => {
  return (
    <div className="px-6 mx-auto  sm:px-6 bg-primary">
    <div className="relative pt-6 pb-6">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo */}
                    <a href="/"><span className="sr-only">Company Name</span>
                        <img className="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" loading="lazy" width="202" height="40" alt='Logo'/>
                    </a>
                    <div className="flex items-center -mr-2 md:hidden">
                        <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"  type="button" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:space-x-8 list-none">
                <li>
                    <a href="/" className=" text-lg px-3 py-2 bg-white   rounded-full shadow-lg text-black font-semibold list-none  duration-300"
                        target="">Home</a>
                </li>
                <li>
                    <a href="/" className="font-semibold text-black px-3 py-2 text-lg list-none rounded-full   hover:bg-white hover:shadow-lg duration-300"
                        target="">CourseWork
                    </a>
                </li>
                <li>
                    <a href="/" className="text-lg font-semibold text-black list-none hover:text-gray-900"
                        target="_blank">Dissertation
                    </a>
                </li>
                <li>
                    <a href="/" className="text-lg font-semibold text-black list-none hover:text-gray-900"
                        target="_blank">Essay
                    </a>
                </li>
                <li>
                    <a href="/" className="text-lg font-semibold text-black list-none hover:text-gray-900"
                        target="_blank">Thesis
                    </a>
                </li>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex rounded-full shadow">
                    <button href="#"
                        className="inline-flex items-center px-4 py-2 text-lg text-primary bg-black border border-transparent  cursor-pointer font-base hover:bg-gray-50 ">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    </div>
</div>
  )
}

export default Navbar