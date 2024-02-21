"use client";
import axios from 'axios';
import { useState, useRef } from "react";



const GetOtp = ({countryCodePro,mobileNo,otpPage,setOtpPage}) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (index, e) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    if (e.target.value !== "" && index < 5) {
      refs.current[index + 1].focus();
    }

    const combinedCode = newCode.join("");
    setVerificationCode(combinedCode); // Update verification code state
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      refs.current[index - 1].focus();
    }
  };
  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(
        "https://staging-api-gateway.meelance.com/api/v1/auth/verify-phone",
        {
          countryCode: countryCodePro,
          otp: verificationCode,
          phone: mobileNo,
        }
      )
      console.log(response.data.data.isNew);
      if (response.data.data.isNew === false) {
        window.location.href = '/profile';
        alert("old user");
      }else if(response.data.data.isNew === true) {
        window.location.href = '/register';
        alert("new user");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };


  return (
    <div className="basis-[50%] rounded-[0_20px_20px_0] px-[20px] py-[30px] border-[1px] border-[#00000033]">
      <p className="text-sm font-[400] leading-4 tracking-normal mt-[20px] text-center">
        Enter the code we&apos;ve sent to your mobile number
      </p>
      <div className="flex justify-center otpBox">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleBackspace(index, e)}
            ref={(el) => (refs.current[index] = el)}
            className="w-[43px] h-[40px] mr-2 rounded-md border-[1px] border-[#494848b2] shadow-sm text-center mt-[30px]"
          />
        ))}
      </div>
      <p className="text-sm font-medium leading-4 tracking-normal text-[#000] text-center mt-[30px]">
        Send code again{" "}
        <span className="text-sm font-normal leading-[18px] tracking-normal text-[#000000b2]">
          00:20
        </span>
      </p>
      <button
        onClick={handleVerifyOTP}
        type="submit"
        className="verify w-full py-[15px] mt-[30px]"
      >
        Verify
      </button>
      <h2 className="text-sm font-semibold leading-4 tracking-normal text-center mt-[60px] cursor-pointer" onClick={()=>setOtpPage(!otpPage)}>
        CHANGE NUMBER
      </h2>
    </div>
  );
};

export default GetOtp;
