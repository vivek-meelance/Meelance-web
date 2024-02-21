"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileNavbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  return (
    <div className="bg-[#FDF5FF] py-4 sticky top-0 z-10">
      <div className="container">
        <nav className="py-4 flex justify-between md:justify-start items-center gap-[10px] lg:gap-[30px]">
          <div className="">
            <Link href="/">
              <Image
                src="/images/profile-meelance-logo.svg"
                alt="Melance Logo"
                width={387}
                height={100}
                className="w-[80px] md:w-auto"
              />
            </Link>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/images/search-normal.svg"
              alt="Melance Logo"
              width={16}
              height={16}
              className="absolute top-[10px] left-[7px]"
            />
            <input
              type="text"
              placeholder="Search here"
              className="shadow-[0px_1.2000000476837158px_4.800000190734863px_0px_#00000029] bg-[#fff] text-sm font-normal leading-4 tracking-normal rounded-3xl pl-[30px] pr-[10px] py-[10px] w-[200px] lg:w-[303px]"
            />
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/"
              className="text-white bg-white w-auto text-lg flex items-center justify-between rounded-3xl p-[12px]"
            >
              <Image
                src="/images/Home.svg"
                alt="Mail Logo"
                className=""
                width={16}
                height={16}
              />
              <span className="text-sm font-normal leading-4 tracking-normal text-center text-[#000]">
                Home
              </span>
            </Link>
          </div>
          <div className="bg-white w-[40px] h-[40px] rounded-full p-2 hidden md:flex justify-center items-center">
            <Image
              src="/images/briefcase-outline.svg"
              alt="Menu Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="bg-white w-[40px] h-[40px] rounded-full p-2 hidden md:flex justify-center items-center">
            <Image
              src="/images/bx-message-dots.svg"
              alt="Menu Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="bg-white w-[40px] h-[40px] rounded-full p-2 hidden md:flex justify-center items-center">
            <Image
              src="/images/Notification.svg"
              alt="Menu Logo"
              width={16}
              height={16}
            />
          </div>
          <div className="h-[40px] rounded-full p-2 hidden md:flex justify-center items-center">
            <Image
              src="/images/profileImg.svg"
              alt="Menu Logo"
              width={40}
              height={40}
            />
          </div>
          <div className="block md:hidden">
            <button
              className="bg-white rounded-full p-2"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Image src="/images/Menu.svg" alt="Menu Logo" width={24} height={24} />
            </button>
          </div>
          {!menuToggle ? (
            <>
              <div className="w-full h-screen bg-[rgba(0,0,0,0.8)] absolute left-0 top-0">
                <div className="flex flex-col gap-[20px] bg-[#FDF5FF] rounded-[10px_0_0_10px] shadow-md h-screen w-[250px] 2sm:w-[300px] p-4 absolute top-0 right-[0px] z-50 pt-[80px]">
                  <div className="relative">
                    <Image
                      src="/images/search-normal.svg"
                      alt="Melance Logo"
                      width={16}
                      height={16}
                      className="absolute top-[10px] left-[7px]"
                    />
                    <input
                      type="text"
                      placeholder="Search here"
                      className="shadow-[0px_1.2000000476837158px_4.800000190734863px_0px_#00000029] bg-[#fff] text-sm font-normal leading-4 tracking-normal rounded-3xl pl-[30px] pr-[10px] py-[10px] w-[200px] lg:w-[303px]"
                    />
                  </div>
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-white bg-white w-auto text-lg flex items-center justify-between rounded-3xl p-[12px]"
                    >
                      <Image
                        src="/images/Home.svg"
                        alt="Mail Logo"
                        className=""
                        width={16}
                        height={16}
                      />
                      <span className="text-sm font-normal leading-4 tracking-normal text-center text-[#000]">
                        Home
                      </span>
                    </Link>
                  </div>
                  <div className="bg-white w-[40px] h-[40px] rounded-full p-2 flex justify-center items-center">
                    <Image
                      src="/images/briefcase-outline.svg"
                      alt="Menu Logo"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="bg-white w-[40px] h-[40px] rounded-full p-2 flex justify-center items-center">
                    <Image
                      src="/images/bx-message-dots.svg"
                      alt="Menu Logo"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="bg-white w-[40px] h-[40px] rounded-full p-2 flex justify-center items-center">
                    <Image
                      src="/images/Notification.svg"
                      alt="Menu Logo"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="h-[40px] rounded-full py-2 flex items-center">
                    <Image
                      src="/images/profileImg.svg"
                      alt="Menu Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                  <button
                    onClick={() => setMenuToggle(!menuToggle)}
                    className="text-[#fff] bg-[#fff] rounded-full absolute w-[44px] h-[44px] left-[15px] top-[17px] shadow-[0px_1px_6.199999809265137px_1px_#BF75E533_inset] flex justify-center items-center"
                  >
                    <Image
                      src="/images/cancel.svg"
                      alt="Menu Logo"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
};

export default ProfileNavbar;
