import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { color } from "@mui/system";
const homesection = () => {
  return (
    <div className="bg-sky-900 mt-20">
      <section className=" body-font py-10">
        <p
          className="text-3xl text-center text-white font-medium p-10
              "
        >
          Digital-first. Customer-centered. Startup-inspired.
        </p>

        <div className=" container mx-auto bg-white flex px-10 py-24 md:flex-row flex-col items-center w-4/6 shadow-xl">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/man.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col gap-y-20 md:items-start md:text-left items-center text-center">
            <div className="flex gap-5 justify-between ">
              <LanguageIcon
                sx={{ color: "red" }}
                className="hover:bg-sky-900 bg-gray-100 w-14 h-14 p-2 rounded-lg"
              />
              <p className="items-start ">
                On the strength of technical excellence, we enable businesses to
                transcend their IT challenges and gain a competitive edge by
                leveraging bleeding edge technologies
              </p>
            </div>
            <div className="flex gap-5 justify-between  leading-relaxed">
              <AutoGraphIcon
                sx={{ color: "red" }}
                className="hover:bg-sky-900 bg-gray-100 w-14 h-14 p-2 rounded-lg"
              />
              <p className="items-start ">
                Organizations need a partner that will solve their problems for
                today and transform them to stay relevant with the changing
                demands of the marketplace. Through strategy and delivery of
                technology and engineering, platforming, experience design and
                more, we help clients put consumers first and stay agile—because
                what’s good for your customer is good for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homesection;
