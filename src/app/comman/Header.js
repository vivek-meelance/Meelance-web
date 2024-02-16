"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PopupBox from "./PopupBox";
import EasyAccessForm from "../components/landing_page/EasyAccessForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const handleHam = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="bg-[#FDF5FF] sticky top-0 z-10">
      <div className="container">
        <nav className=" p-4 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Melance Logo"
                width={387}
                height={100}
                className="w-[170px] md:w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="#"
              onClick={openPopup}
              className="text-white bg-white w-auto text-lg mr-4 flex items-center justify-between rounded-2xl py-[10px] px-[8px] request"
            >
              <Image
                src="/Mail.svg"
                alt="Mail Logo"
                className=""
                width={24}
                height={21}
              />
            </Link>
            <PopupBox isOpen={isOpen} onClose={closePopup} className="relative">
              <EasyAccessForm />
              <button
                onClick={closePopup}
                className="text-[#fff] absolute right-[20px] top-4 bg-[#fff] rounded-2xl"
              >
                <Image src="/cancel.svg" alt="Menu Logo" width={24} height={24} />
              </button>
            </PopupBox>

            <div className="relative">
              <button className="bg-white rounded-full p-2" onClick={handleHam}>
                <Image src="/Menu.svg" alt="Menu Logo" width={24} height={24} />
              </button>
              {hamburger ? (
                <Link href="/login" className="block text-center text-black-200 hover:text-black-700 font-semibold" onClick={()=>setHamburger(!hamburger)}><div className="bg-white rounded-lg shadow-md p-4 absolute -right-[50px]">
                  Login
                </div></Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
