"use client";
import React, { useState, useRef } from "react";

const GetOtp = ({ setOtpPage, otpPage }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const refs = useRef([]);
  const handleChange = (index, e) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    if (e.target.value !== "" && index < 5) {
      refs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      refs.current[index - 1].focus();
    }
  };
  return (
    <div className="basis-[50%] rounded-[0_20px_20px_0] px-[20px] py-[30px] border-[1px] border-[#00000033]">
      <p className="text-sm font-[400] leading-4 tracking-normal mt-[20px] text-center">
        Enter the code we've sent to your mobile number
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
        type="submit"
        className="verify w-full py-[15px] mt-[30px]"
        onClick={() => setOtpPage(!otpPage)}
      >
        Verify
      </button>
      <h2 className="text-sm font-semibold leading-4 tracking-normal text-center mt-[60px]">CHANGE NUMBER</h2>
    </div>
  );
};

export default GetOtp;
