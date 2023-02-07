import { AppBar } from '@mui/material'
import Link from 'next/link'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../images/logos/logo1.png'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-[100%] bg-white fixed top-0 shadow-lg z-10">
      <div className="container m-auto justify-between  md:max-w-7xl md:items-center md:flex md:px-3">
        <div className="flex items-center justify-between py-3 md:py-4 md:block">
          <a className=" items-center  mb-4 md:mb-0 ">
           <img src={"/logo1.png"} alt="no logo"  className=' '/>
            
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className=''>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden "
            }`}
          >
            <ul className=" items-center  space-y-3 md:flex md:space-x-2 md:space-y-0">
              <li className="lg:text-lg md:text-sm font-semibold text-gray-600 ">
                <Link
                  href="/HeroSection"
                  className=" hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl "
                >
                  Home
                </Link>
              </li>
              <li className="lg:text-lg md:text-sm font-semibold text-gray-600 ">
                <Link
                  href="/about"
                  className=" hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl"
                >
                  About Us
                </Link>
              </li>
              <li className="lg:text-lg md:text-sm font-semibold text-gray-600 ">
                <Link
                  href="/services"
                  className=" hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl"
                >
                  Services
                </Link>
              </li>
              <li className="lg:text-lg md:text-sm font-semibold text-gray-600 ">
                <Link
                  href="/clients"
                  className=" hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl"
                >
                  Clients
                </Link>
              </li>
              <li className="lg:text-lg md:text-sm font-semibold text-gray-600 ">
                <Link
                  href="/contact"
                  className=" hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl"
                >
                  Contact Us
                </Link>
              </li>
              <li className="lg:text-lg md:text-sm  font-semibold text-gray-600 ">
                <Link
                  href=""
                  className="hover:text-sky-900 border-2 px-4 py-2 rounded-full  border-transparent hover:border-sky-900 hover:shadow-xl"
                >
                  {" "}
                  Brochures
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar