import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart.cart);

  const user = useSelector((state) => state.user.user);

  return (
    <div className="py-4 ">
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-between items-center py-2">
        <div>
          <Link to="/">
            <h1 className="xl:text-5xl  md:text-4xl text-3xl font-bold first-letter:text-pink-500">
              Beca K<span className="text-green-500">i</span>na
            </h1>
          </Link>
        </div>

        {/* profile and cart */}
        <div className="md:flex hidden items-center relative">
          <Link to="/search" className="px-3 border-r-2 border-gray-400">
            <HiOutlineSearch className="text-2xl hover:text-green-500 " />
          </Link>
          {user ? (
            <Link
              to="/dashboard/profile"
              className="px-3 border-r-2 border-gray-400"
            >
              <FiUser className="text-2xl hover:text-green-500 " />
            </Link>
          ) : (
            <Link to="/signin" className="px-3 border-r-2 border-gray-400">
              <FiUser className="text-2xl hover:text-green-500 " />
            </Link>
          )}
          <Link to="/cart" className="px-3  relative">
            <AiOutlineShopping className="text-2xl hover:text-green-500 relative " />
            <span className="absolute bottom-3 right-1 bg-green-500 w-5 text-center text-sm rounded-full">
              {cart?.length}
            </span>
          </Link>
        </div>

        {/* // menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <CgMenu className="text-4xl mt-2 " />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation;
