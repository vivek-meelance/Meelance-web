import React from "react";
import Link from "next/link";
import Image from "next/image";
const SideBar = ({ hamburger, setHamburger }) => {
  return (
    <>
      <div className="w-full h-screen bg-[rgba(0,0,0,0.8)] absolute left-0 top-0">
        <div className="bg-white rounded-[10px_0_0_10px] shadow-md h-screen w-[250px] 2sm:w-[300px] p-4 absolute top-0 right-[0px] z-50">
          <Link
            href="/login"
            className="block text-black-200 hover:text-black-700 font-semibold"
            onClick={() => setHamburger(!hamburger)}
          >
            {" "}
            Sign In
          </Link>
          <hr className="my-[20px] bg-[#100606b2] text-[#000000B2]" />
          <Link
            href="/"
            className="block text-black-200 hover:text-black-700 font-semibold"
            onClick={() => setHamburger(!hamburger)}
          >
            Download app
          </Link>
          <button
            onClick={() => setHamburger(!hamburger)}
            className="text-[#fff] bg-[#fff] rounded-2xl absolute w-6 left-[-15px] top-[17px]"
          >
            <Image src="/cancel.svg" alt="Menu Logo" width={24} height={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
