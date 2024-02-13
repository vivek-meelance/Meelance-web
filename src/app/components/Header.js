import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

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
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="#"
              className="w-[108px] text-white bg-white text-lg mr-4 flex items-center justify-between rounded-2xl py-[6px] px-[8px]"
            >
              <Image src="/Mail.svg" alt="Mail Logo" width={24} height={21} />
              <span className="text-[14px] text-[#000] font-medium">
                request
              </span>
            </Link>
            <button className="bg-white rounded-full p-2">
              <Image src="/Menu.svg" alt="Menu Logo" width={24} height={24} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
