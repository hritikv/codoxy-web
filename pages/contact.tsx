import React from "react";

const contact = () => {
  return (
    <div>
      <div className="w-full  border-2 bg-sky-900 text-white text-center py-44">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-8">
          Contact us today and discuss, how we can develop a mutually beneficial
          and long term relationship!
        </p>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 
          flex items-end justify-start relative bg-[url('/images/bg.avif')] shadow-lg"
          >
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  4th Floor, Virtual Coworks, Mangal City, Sch No. 54, Vijay
                  Nagar Indore - 452010 (M.P.)
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@codoxysolutions.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">(+91) 999-340-8372</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-lg">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font mx-4">
              Feedback
            </h2>

            <div className="relative mb-4 mx-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out "
              />
            </div>
            <div className="relative mb-4 mx-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 mx-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-4">
              send messages
            </button>
            <p className="text-xs text-gray-500 mt-3 mx-4">
              Thankyou for your most important feedback
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default contact;
