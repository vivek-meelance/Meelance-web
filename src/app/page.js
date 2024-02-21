'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import Community from "./components/landing_page/Community";
import FindRoles from "./components/landing_page/FindRoles";




export default function Home() {
  const communityRef = useRef(null);
  
  const scrollToCommunity = () =>{
    if (communityRef.current) {
      const communityTop = communityRef.current.offsetTop;
      window.scrollTo({
        top: communityTop - 150,
        behavior: 'smooth'
      });
    }
  }
  useEffect(() => {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started
          })
          .catch((error) => {
            console.log("Autoplay was prevented:", error);
          });
      }

      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };

      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    });
  }, []);
  return (
    <>
      <div className="bg-[#FDF5FF] min-h-screen h-auto">
        <div className="container grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4">
          <div className="pt-[20px] md:pt-[50px]">
            <h1 className={`text-[35px] 2sm:text-[40px] lg:text-[50px] font-normal heading`} style={{ fontFamily: 'Chau Philomene One, sans-serif' }}>
              <span>
              Exclusive resource for “entertainment talent professionals”
              </span>
            </h1>
            <div className="rounded-2xl truncate">
              <video muted className="w-full" ref={communityRef}>
                <source src="/videos/frontVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div>
            {/* <Image src='/phoneScreen.svg' alt="phoneScreen" width={372} height={508}/> */}
            <video
              autoPlay
              muted
              loop
              // width="372"
              // height="508"
              className="mx-auto md:ml-auto 2xl:mx-auto w-[400px]"
              ref={communityRef}
            >
              <source src="/videos/mobileVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="container flex flex-col-reverse md:flex-row gap-[20px] justify-between mt-[25px]">
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row items-center p-[8px] w-auto lg:w-[540px] gap-[10px] shadow-[0px_3px_25px_0px_#00000033] rounded-xl">
              <Image
                src="/images/Avatars.svg"
                alt="Gallery_Animation"
                width="208"
                height="48"
              />
              <p className="text-[#000] font-normal text-[18px]">
                +12,568 signed up for early access
              </p>
            </div>
            <button onClick={scrollToCommunity}
              className="flex items-center shadow-[0px_3px_40px_0px_#00000040] gap-2.5 pl-6 pr-[24px] py-[10px] rounded-2xl bg-[#fff] mt-[30px] font-bold"
            >
              <span>learn more here</span>
              <Image
                src="/images/guidance_up-arrow.svg"
                alt="Gallery_Animation"
                width="24"
                height="24"
              />
            </button>
          </div>
          <div className="flex-1 truncate rounded-2xl">
            <video autoPlay muted loop ref={communityRef}>
              <source src="/videos/commentsVideo.mp4" type="video/mp4" className="w-full"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Community ref={communityRef}/>
        <FindRoles />
      </div>
    </>
  );
}
