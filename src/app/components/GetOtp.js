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
      <p className="text-sm font-[400] leading-4 tracking-normal mt-[20px]">
      Enter the code we've sent to your mobile number
      </p>
      {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleBackspace(index, e)}
            ref={(el) => (refs.current[index] = el)}
            className="w-10 h-10 mr-2 rounded-md bg-gray-200 border border-gray-300 shadow-sm text-center"
          />
        ))}
      <button
        type="submit"
        className="verify w-full py-[15px] mt-[30px]"
        onClick={() => setOtpPage(!otpPage)}
      >
        Verify
      </button>
    </div>
  );
};

export default GetOtp;
