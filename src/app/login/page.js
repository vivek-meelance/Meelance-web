"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GetOtp from "../components/GetOtp";

const Page = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [phoneNumber, setPhoneNumber] =useState("");
  return (
    <div className="container py-[35px]">
      <div className="flex justify-center m-auto h-auto md:h-[559px] max-w-[750px] 2xl:max-w-[1000px] w-auto">
        <div className="basis-[50%] hidden md:block bg-[url('/loginPic.svg')] bg-no-repeat bg-cover"></div>
        {!otpPage ? (
          <div className="basis-[100%] sm:basis-[70%] md:basis-[50%] rounded-[20px] md:rounded-[0_20px_20px_0] px-[20px] py-[30px] border-[1px] border-[#00000033]">
            <h1 className="text-sm font-bold leading-4 tracking-normal">
              What’s your number?
            </h1>
            <p className="text-sm font-[400] leading-4 tracking-normal mt-[20px]">
              We protect our community by making sure everyone on Meelance is
              real
            </p>

            <div className="phoneCountry">
              <PhoneInput
                country={"us"}
                value={"9853111190"}
                // onChange={(phone) => this.setState({ phone })}
                onChange={(phone) => console.log(phone)}
                className="mt-[30px]"
              />
            </div>
            <button type="submit" className="verify w-full py-[15px] mt-[30px]" onClick={()=>setOtpPage(!otpPage)}>
              Verify
            </button>
            <p className="text-sm font-[400] leading-4 tracking-normal mt-[100px]">
              By entering your number, you’re agreeing to our{" "}
              <Link href="#" className="text-[#504EC3]">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#504EC3]">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        ) : (
          <GetOtp setOtpPage={setOtpPage} otpPage={otpPage}/>
        )}
      </div>
    </div>
  );
};

export default Page;
