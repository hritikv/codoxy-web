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
                  <Link href="/HeroSection" className="hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-red-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-red-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-red-600">
                    Client
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/brochure" className="hover:text-red-600">
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
                  <Link href="" className="hover:text-red-600">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-red-600">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-red-600">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:text-red-600">
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

              <p className="hover:text-red-400">
                Based in central part of India,we are a company of young
                entrepreneurs working for the past 7 years.
              </p>
              <span className="flex mt-5 justify-start items-start ">
            <Link href="https://www.facebook.com/codoxysolutions" className="">
              <FacebookIcon className="w-10 h-10 cursor-pointer hover:bg-blue-400" />
            </Link>
            {/* <a className="ml-3 ">
              <GoogleIcon className="w-10 h-9 cursor-pointers" />
            </a> */}
            <Link href="https://www.linkedin.com/company/karyon-solutions/" className="ml-3 ">
              <LinkedInIcon className="w-10 h-10 cursor-pointer" />
            </Link>
          
          </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex justify-around items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
              
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
