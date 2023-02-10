import React, { useState, useEffect } from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const HeroSection = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="text-gray-600 body-font mt-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              WE MAKE YOUR DREAM INTO DIGITAL REALITY
            </h1>
            <p className="mb-8 leading-relaxed">
              Codoxy brings the fast-forwarding digital future for their
              clients. We are a team of experts under one umbrella to engage the
              latest technology across the globe. As a technology hub, we have
              facilitated digital transformation on a variety of projects for
              established MNCs, up-and-coming startups, and governments.
            </p>
            <p className="mb-8 leading-relaxed">
              <span className="text-lg text-black font-semibold title-font ">We focus on two aspects:</span><br/>  Addressing the "NOW" and Innovating the
              "NEXT". For organizations looking to use technology to disrupt
              business, we transform digital experiences with purpose-built,
              outcome-oriented product engineering solutions.
            </p>
            {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className=" hover:scale-125 transition-all duration-700 object-cover object-center rounded"
              alt="hero"
              src="/images/home1.jpg"
            />
          </div>
        </div>
        <div className="text-center  ">
          <p className="text-3xl text-black font-normal mb-5 ">What We Do</p>
        </div>
        <div className=" body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="md:flex-row gap-10 justify-center flex flex-col gap-y-10 w-full ">
              <div className="  md:w-1/3 shadow-xl">
                <div className="h-full flex flex-col  items-center gap-y-3 bg-white  px-4 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                  <LaptopIcon
                    sx={{ color: "white" }}
                    className="bg-violet-600 rounded-full p-3 w-14 h-14 "
                  />
                  <p className="text-lg text-black font-semibold ">
                    Experience Design & Digital Platforms
                  </p>
                  <p className="text-center">
                    We start by redefining the edges, expand the possibilities
                    to meet all customer needs, and build the future that
                    customer demands. Creative solutions blended with latest
                    technologies form the right base for innovative businesses.
                  </p>
                </div>
              </div>
              <div className="  md:w-1/3 shadow-xl">
                <div className="h-full flex flex-col  items-center gap-y-3  bg-white bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                  <PhoneIphoneIcon
                    sx={{ color: "white" }}
                    className="bg-pink-500 rounded-full p-3 w-14 h-14 "
                  />
                  <p className="text-lg text-black font-semibold ">
                    Transformation
                  </p>
                  <p className="text-center">
                    Digitize & transform the functions that drive your customer
                    experience. Document the start by benchmarking technology,
                    people, & process. Align operations to the customer
                    experience which supports the promise. Grow & scale by
                    optimizing and extending experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-10 mx-auto">
            <div className="md:flex-row gap-10 justify-center flex flex-col gap-y-10 w-full ">
              <div className="  md:w-1/3 shadow-xl">
                <div className="h-full flex flex-col  items-center gap-y-3 bg-white bg-opacity-75 px-4 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                  <CheckIcon
                    sx={{ color: "white" }}
                    className="bg-yellow-600 rounded-full p-3 w-14 h-14 "
                  />
                  <p className="text-lg text-black font-semibold ">
                    Software Assurance Engineering
                  </p>
                  <p className=" ">
                    To accelerate software & digital initiatives software
                    development & delivery teams are always challenged with
                    higher expectations of agility and quality. Guided by Codoxy
                    expertise, best practices, and accelerators, our software
                    assurance services enable you to enhance software delivery
                    agility and quality through adoption of modern approaches,
                    tools, & automation.
                  </p>
                </div>
              </div>
              <div className=" md:w-1/3 shadow-xl">
                <div className="h-full flex flex-col  items-center gap-y-3 bg-white bg-opacity-75 px-4 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                  <ShoppingCartIcon
                    sx={{ color: "white" }}
                    className="bg-green-400 rounded-full p-3 w-14 h-14 "
                  />
                  <p className="text-lg text-black font-semibold ">
                    Digital Innovation
                  </p>
                  <p className="text-center">
                    Bring promising ideas to life quickly to discover how
                    customers respond to them. Innovate at startup speed with
                    purposeful innovation. Defend your core business: Rethink
                    Extend your core business: Refresh Go beyond your core
                    business: Reframe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

// import React, { useState, useEffect } from "react";

// const BackToTop = () => {
// const [showButton, setShowButton] = useState(false);

// const handleScroll = () => {
//   if (window.pageYOffset > 100) {
//     setShowButton(true);
//   } else {
//     setShowButton(false);
//   }
// };

// useEffect(() => {
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const handleClick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

//   return (
//     <>
//       {/* {showButton && (
//         <button
//           onClick={handleClick}
//           className="fixed bottom-0 right-0 m-4 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 12h14M12 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       )} */}
//     </>
//   );
// };

// export default BackToTop;
