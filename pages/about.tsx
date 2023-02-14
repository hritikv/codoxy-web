import React, { useState, useEffect } from "react";
// import Image from "next/image";
const About = () => {
  const [client, setCLient] = useState(1);
  const [project, setProject] = useState(1);
  const [hos, setHos] = useState(1);

  const [hardWorker, setHardWorker] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (client >= 20) {
        clearInterval(interval);
        return;
      }
      setCLient(client + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [client]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (project >= 50) {
        clearInterval(interval);
        return;
      }
      setProject(project + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [project]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hos >= 40400) {
        clearInterval(interval);
        return;
      }
      setHos(hos + 189);
    }, 10);

    return () => clearInterval(interval);
  }, [hos]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hardWorker >= 25) {
        clearInterval(interval);
        return;
      }
      setHardWorker(hardWorker + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [hardWorker]);

  return (
    <div className="mb-20  ">
      <div className="w-full  border-2 bg-sky-900 text-white text-center py-44">
        <h1 className="text-6xl font-bold">About Us</h1>
      </div>

      <div className="  container mx-auto flex flex-col gap-y-4 items-center text-center m-auto mt-20">
        <h1 className="text-3xl font-bold text-sky-900">About Company</h1>
        <p className="title-font sm:text-2xl text-xl mb-4 font-normal text-gray-900">
          Based in Central India, Codoxy Solutions has expertise in providing
          Web Application, Mobile Application, ERP and E-Commerce Services,
          digital and asset based business solutions that bridges clients
          execution gap to build stronger, simplified and more innovative
          businesses.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/aboutUs2.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-8 leading-relaxed">
              We are the team of young entrepreneurs who believe in creating
              future with the right code
            </p>
            <p className="mb-8 leading-relaxed">
              Our team has some highly skilled coders cum brogrammers. Focused
              on our individual clients served by attentive leadership & people
              who aim relentless pursuit towards achieving better results every
              time
            </p>
            <p className="mb-8 leading-relaxed">
              Like our name we emphasis on fundamentals to give out a high
              quality. Customer satisfaction is one of the most crucial things
              for us and comes first in our priority list
            </p>
            <p className="mb-8 leading-relaxed">
              Analyzing your needs thoroughly and developing precise website.
              Codoxy, provide astonishing work from the scratch so that the
              development would be highly customizable as per clients'
              requirement. We have 95% of the client retention rate
            </p>
          </div>
        </div>

        
        <div className="flex flex-wrap py-24 bg-sky-900 text-center">
          <div className=" w-1/2 md:w-1/4 p-4">
            <p className="text-3xl text-white font-semibold">{client}</p>
            <p className="mt-2 text-white">clients</p>
          </div>
          <div className=" w-1/2 md:w-1/4 p-4">
            <p className="text-3xl text-white font-semibold">{project}</p>
            <p className="mt-2 text-white">projects</p>
          </div>
          <div className=" w-1/2 md:w-1/4 p-4">
            <p className="text-3xl text-white font-semibold">{hos}</p>
            <p className="mt-2 text-white">hours of support</p>
          </div>
          <div className=" w-1/2 md:w-1/4 p-4">
            <p className="text-3xl text-white font-semibold">{hardWorker}</p>
            <p className="mt-2 text-white">IT Folks</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
