import React from "react";

const clients = () => {
  return (
    <div>
      <div className="w-full  border-2 bg-sky-900 text-white text-center py-44">
        <h1 className="text-5xl font-bold">See who's changed their future</h1>
        <p className="mt-8">
          Bring us your vision and we will focus it. Bring us your dream and we
          will make it a reality. Bring us your problem and we will break down
          barriers
        </p>
        <p className="mt-2">
          and shatter boundaries so you can go further, do more and be the
          leader that you were meant to be.
        </p>
      </div>
      <section className="text-gray-600 body-font mt-28">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-wrap items-center -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center text-center   block"
                  src="/images/Tarento_logo.svg"
                />
              </a>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center block"
                  src="/images/Delixus.png"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center  block"
                  src="/images/mac-logo.png"
                />
              </a>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center  block"
                  src="/images/clubpetnyc-logo.jpg"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center  block"
                  src="/images/clyde-mays.svg"
                />
              </a>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center  block"
                  src="/images/2oobz.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <img classNameName="w-1/4 h-32" alt="hero" src="/images/Tarento_logo.svg" />
        <img classNameName="w-50 h-30" alt="hero" src="/images/Delixus.png" />{" "}
        <img classNameName="w-1/5 h-32" alt="hero" src="/images/mac-logo.png" />{" "}
        <img classNameName="w-1/5 h-36" alt="hero" src="/images/clubpetnyc-logo.jpg" />{" "}
        <img classNameName="w-1/5 " alt="hero" src="/images/clyde-mays.svg" />{" "}
        <img classNameName="w-1/5" alt="hero" src="/images/2oobz.png" /> */}
    </div>
  );
};

export default clients;
