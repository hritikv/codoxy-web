import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <>
      <footer className="body-font bg-sky-900 text-white">
        <div className="container px-5 pt-10 pb-8 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold tracking-widest text-xl mb-3">
                Useful Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Client
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Download Brochures
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold tracking-widest text-xl mb-3">
                Our Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-gray-800">
                    E-Commerce Development
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold tracking-widest text-xl mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li>4th Floor, Virtual Coworks,</li>
                <li>Mangal City, Sch No: 54,</li>
                <li>Vijay Nagar Indore - 452010 (M.P.) India</li>
                <li className="hover:text-gray-800">Phone: +91-999-340-8372</li>
                <li className="hover:text-gray-800">
                  Email: info@codoxysolutions.com
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold tracking-widest text-xl mb-3">
                About codoxy solution
              </h2>

              <p className="hover:text-gray-800">
                Based in central part of India,we are a company of young
                entrepreneurs working for the past 7 years.
              </p>
              <span className="flex mt-5 justify-center items-start ">
            <a className="">
              <FacebookIcon className="w-10 h-10 cursor-pointer" />
            </a>
            {/* <a className="ml-3 ">
              <GoogleIcon className="w-10 h-9 cursor-pointers" />
            </a> */}
            <a className="ml-3 ">
              <LinkedInIcon className="w-10 h-10 cursor-pointer" />
            </a>
            {/* <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a> */}
          </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex justify-around items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <span className="ml-3 text-xl">Codoxy Solution</span>
            </a>
            <div className="flex flex-col text-center text-sm sm:ml-6 sm:mt-0 mt-4">
              <div>
                {" "}
                © Copyright Codoxy Solution<span>.All Rights Reserved</span>
              </div>
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1"
                target="_blank"
              >
                Designed by Codoxy Solutions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
