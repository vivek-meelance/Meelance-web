import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#FDF5FF] rounded-[24px_24px_0_0]">
      <div className="container h-auto lg:h-[150px] py-[20px] lg:py-0 flex flex-col lg:flex-row gap-[20px] justify-between items-center">
        <div className="flex justify-center 2sm:justify-start flex-wrap gap-1">
          <Image
            src="/youtube.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/facebook.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/Insta.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/ximg.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/thread.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/tiktok.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/telegram.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
          <Image
            src="/medium.svg"
            alt="Gallery_Animation"
            width="44"
            height="44"
          />
        </div>
        <div className="flex flex-col items-center 2sm:flex-row gap-3">
          <Link
            href="/"
            className="text-[17px] font-normal leading-5 tracking-normal"
          >
            help
          </Link>
          <Link
            href="/"
            className="text-[17px] font-normal leading-5 tracking-normal"
          >
            privacy
          </Link>
          <Link
            href="/"
            className="text-[17px] font-normal leading-5 tracking-normal"
          >
            terms
          </Link>
          <Link
            href="/"
            className="text-[17px] font-normal leading-5 tracking-normal"
          >
            language english (India)
          </Link>
        </div>
        <div className="text-[17px] font-medium leading-5 tracking-normal text-left">
          © 2023 meelance
        </div>
      </div>
    </div>
  );
};

export default Footer;
