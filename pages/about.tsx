import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="mb-20  ">
      <div className="w-full  border-2 bg-sky-900 text-white text-center py-44">
        <h1 className="text-6xl font-bold">About Us</h1>
      </div>
      {/* <div className='container mx-auto' >
        <div className=' flex flex-col gap-y-4 text-center m-auto mt-20'>
        <h1 className='text-3xl font-bold '>About company</h1>
        <p className='text-xl font-semibold'>Based in Central India, Codoxy Solutions has expertise in providing Web Application, Mobile Application, ERP and E-Commerce Services, digital and asset based business solutions that bridges clients execution gap to build stronger, simplified and more innovative businesses.</p>
        </div>
        <div className=' container m-auto mt-16  flex flex-row gap-x-8 justify-between   '>
          <div className=''>
          <img src="/images/about-01.jpg" className="w-[1600px]  " alt="" />
          </div>
          <div className='flex flex-col items-start gap-y-4 '>
          <p className='text-lg font-medium text-sky-900'>We are the team of young entrepreneurs who believe in creating future with the right code</p>
          <p className='text-lg font-medium text-sky-900'>Our team has some highly skilled coders cum brogrammers. Focused on our individual clients served by attentive leadership & people who aim relentless pursuit towards achieving better results every time</p>
          <p className='text-lg font-medium text-sky-900'>Like our name we emphasis on fundamentals to give out a high quality. Customer satisfaction is one of the most crucial things for us and comes first in our priority list</p>
          <p className='text-lg font-medium text-sky-900'>Analyzing your needs thoroughly and developing precise website. Codoxy, provide astonishing work from the scratch so that the development would be highly customizable as per clients' requirement. We have 95% of the client retention rate</p>
          </div>
        </div>
        
      </div> */}
      <div className='  container mx-auto flex flex-col gap-y-4 items-center text-center m-auto mt-20'>
        <h1 className='text-3xl font-bold text-sky-900'>About Company</h1>
        <p className='title-font sm:text-2xl text-xl mb-4 font-normal text-gray-900'>Based in Central India, Codoxy Solutions has expertise in providing Web Application, Mobile Application, ERP and E-Commerce Services, digital and asset based business solutions that bridges clients execution gap to build stronger, simplified and more innovative businesses.</p>
        </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/about-01.jpg"
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
      </section>
    </div>
  );
};

export default About;
