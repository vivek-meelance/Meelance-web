"use client"
import { useState} from "react";
import axios from "axios";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GetOtp from "../components/GetOtp";


const Page = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCodePro, setCounrtyCodePro] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const handleVerify = async () => {
    try {
      const selectedFlag = document.querySelector('.react-tel-input .flag-dropdown .selected-flag');
      const countryCode = selectedFlag ? selectedFlag.getAttribute('title').split(':')[1] : ""; // Extract country code
      const formattedPhoneNumber = phoneNumber.slice(2);
      const response = await axios.post(
        "https://staging-api-gateway.meelance.com/api/v1/auth/register-phone",
        {
          countryCode: countryCode,
          phone: formattedPhoneNumber
        }
      );
      setCounrtyCodePro(countryCode);
      setMobileNo(formattedPhoneNumber);
      console.log(countryCodePro);
      setOtpPage(true);
    } catch (error) {
      console.error("Error registering phone:", error);
      setError("Error registering phone. Please try again.");
    }
  };
  
  

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
                country={"in"}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                className="mt-[30px]"
              />
            </div>
            <button type="submit" className="verify w-full py-[15px] mt-[30px]" onClick={handleVerify}>
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
              </Link>.
            </p>
          </div>
        ) : (
          <GetOtp countryCodePro={countryCodePro} mobileNo={mobileNo}/>
        )}
      </div>
    </div>
  );
};

export default Page;
