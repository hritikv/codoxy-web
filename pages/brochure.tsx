import React from "react";
import Portfolio from '@/components/Portfolio'
import Link from "next/link";
const brochure = () => {
  return (
    <div className=" ">
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-medium text-gray-700">CASE STUDIES</h1>
          <div className="flex flex-wrap -m-4 mt-6">
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                <img
                  className="lg:h-60 md:h-36 w-full object-cover object-center hover:opacity-40 hover:scale-105 transition-all duration-700"
                  src="/images/paradiset.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Paradiset: Democratising Healthy Eating
                  </h1>
                  <p className="leading-relaxed mb-3 mt-5">
                    2200 Startup Applicants. 120 Countries. And our customer,
                    Paradiset, has been selected as one of the top 20 companies
                    of the world's most promising impactful startups for the
                    prestigious Norrsken Impact Accelerator program 2022!.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                <img
                  className="lg:h-60   md:h-36 w-full object-cover object-center hover:opacity-40 hover:scale-105 transition-all duration-700"
                  src="/images/bhasini.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Tarento joins Ekstep to build the pillar for National
                    Language Translation Mission via ULCA platform
                  </h1>
                  <p className="leading-relaxed mb-3 mt-5">
                    India required a platform that would focus on building
                    AI-based language technology solutions & creating
                    multilingual datasets to enable digital services in Indian
                    languages. NLTM or Bhashini initiative from MeiTY, EkStep
                    partnered with Tarento for building one of its critical
                    components, ULCA.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
                <img
                  className="lg:h-60 md:h-36 w-full object-cover object-center hover:opacity-40 hover:scale-105 transition-all duration-700"
                  src="/images/rabble.png"
                  alt="blog"
                />
                <div className="p-6">
                 
                  <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    Rabble: Building a first of its kind Cashback Experience
                  </h1>
                  <p className="leading-relaxed mb-3 mt-5">
                    Rabble launched its first app for mobile coupons almost 12
                    years ago and has attracted over 800,000 members in Sweden
                    since then. The company has now taken an innovative step to
                    introduce cashback for groceries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
          <Link href="/caseStudies" className="px-10 text-sm  py-4 border-2 border-gray-300 text-gray-700 font-normal hover:text-white  hover:bg-black rounded">
              VIEW CASE STUDIES
            </Link>
            </div>
        </div>
      </section>
      <Portfolio />
    </div>
  );
};

export default brochure;
