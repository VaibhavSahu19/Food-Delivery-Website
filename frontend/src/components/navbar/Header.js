import { useContext, useState } from "react";
import resLogo from "../../images/resLogo.png";
import resLogoMobile from "../../images/resLogoMobile.png";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, Profile } from "../auth/Auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 0px 0px)", //Here I am gving the circle size bigger then the width and height of the div so that it can cover the whole div and make it look like a circle but it is constrained by div to rectangle
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: "0.5s",
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const { isAuthenticated } = useAuth0();

  //Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex  bg-white justify-between shadow-lg  sticky top-0 z-10 w-full left-0 right-0  ">
      <div className="hidden sm:block">
        <NavLink to="/">
          <img
            className="hover:scale-105 transition-all duration-200 ease-in w-48 h-24 object-cover "
            src={resLogo}
          />
        </NavLink>
      </div>
      {/* Mobile Logo */}
      <div className=" block sm:hidden ">
        <NavLink to="/">
          <img
            className="hover:scale-105 transition-all duration-200 ease-in w-14 h-12 m-4"
            src={resLogoMobile}
          />
        </NavLink>
      </div>

      <div className="flex">
        <div className="flex sm:hidden items-center">
          {isAuthenticated && (
            <div className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
              <Profile />
            </div>
          )}
          <div className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            {isAuthenticated ? (
              <LogoutButton className="rounded-2xl" />
            ) : (
              <LoginButton className="rounded-2xl border-none" />
            )}
          </div>
          <div className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/search">
              <FiSearch />
            </NavLink>
          </div>
          <div className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/cart">
              <a href="#" role="button" class="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-pink-tone w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartItems.length}
                </span>
              </a>
            </NavLink>
          </div>
        </div>
        {/* MObile Nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative sm:hidden text-3xl px-4 z-30 "
        >
          {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="flex flex-col items-center justify-center bg-white"
          >
            <motion.div
              variants={variants}
              className="flex absolute right-0 sm:hidden  w-[50vw] shadow-md backdrop-blur-md h-svh items-center justify-center top-0 bg-slate-50 transition-all ease-in duration-500"
            >
              <ul
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="flex-col items-center pl-0 z-10 m-0 justify-center text-xl "
              >
                <li className="px-4 py-2 font-serif  text-light-gray hover:text-pink-tone  w-100% text-center ">
                  <NavLink to="/">Home</NavLink>{" "}
                </li>
                <li className="px-4 py-2 font-serif  text-light-gray hover:text-pink-tone  w-100% text-center">
                  <NavLink to="/aboutUs">About</NavLink>
                </li>
                <li className="px-4 py-2 font-serif text-light-gray hover:text-pink-tone  w-100% text-center">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/*Desktop Nav*/}
      <div className="hidden sm:flex items-center  ">
        <ul className="flex  justify-between items-center">
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone ">
            <NavLink to="/search">
              <div className="flex items-center gap-2">
                <FiSearch />
                <p>Search</p>
              </div>
            </NavLink>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/aboutUs">About</NavLink>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            <NavLink to="/cart">
              <a href="#" role="button" class="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-pink-tone w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartItems.length}
                </span>
              </a>
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
              <Profile />
            </li>
          )}
          <li className="px-4 font-serif text-lg text-light-gray">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-serif text-lg text-light-gray hover:text-pink-tone">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
