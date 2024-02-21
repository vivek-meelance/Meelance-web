"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  dob: "",
  gender: "",
};

const Page = () => {
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const selectedFlag = document.querySelector(".react-tel-input .flag-dropdown .selected-flag");
      const countryCode = selectedFlag ? selectedFlag.getAttribute("title").split(":")[1]: "";
      const formattedPhoneNumber = phone.slice(2).replace(/\D/g, "");

      const response = await axios.post(
        "https://staging-api-gateway.meelance.com/api/v1/auth/register",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          countryCode: countryCode,
          phone: formattedPhoneNumber,
          email: values.email,
          gender: values.gender,
          dob: values.dob,
          isPolicyAccepted: "true",
        }
      );
      const accessToken = response.data.tokens.access.token;
      localStorage.setItem("accessToken", accessToken);
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error registering phone:", error);
      setError("Error registering phone. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div className="container py-[35px]">
      <div className="flex justify-center m-auto h-auto md:h-[559px] w-auto max-w-[750px] 2xl:max-w-[1000px]">
        <div className="basis-[50%] hidden md:block bg-[url('/images/loginPic.svg')] bg-no-repeat bg-cover"></div>
        <div className="basis-[100%] sm:basis-[70%] md:basis-[50%] rounded-[20px] md:rounded-[0_20px_20px_0] px-[20px] py-[30px] border-[1px] border-[#00000033]">
          <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                  <h2 className="text-sm font-bold leading-[17px] tracking-normal">
                    Complete your Signup
                  </h2>
                  <div className="flex flex-col md:flex-row gap-[30px] mt-[20px]">
                    <div>
                      <div className="flex">
                        <Image
                          src="/images/userIcon.svg"
                          alt="Menu Logo"
                          className="inline"
                          width={24}
                          height={24}
                        />
                        <Field
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="placeholder-[#000] border border-solid border-[#00000033] rounded-[10px] w-full md:w-auto h-[44px] pl-[10px] registerForm"
                        />
                      </div>
                      <ErrorMessage name="firstName" />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="placeholder-[#000] border border-solid border-[#00000033] rounded-[10px] w-full md:w-auto h-[44px] pl-[10px] registerForm"
                      />
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="regiPhone mt-[20px]">
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      name="phone"
                      onChange={setPhone} // Update phone state directly
                    />
                    <ErrorMessage name="phone" />
                  </div>
                  <div className="registerDate">
                    <Field
                      type="date"
                      name="dob"
                      className="placeholder-[#000] border border-solid border-[#00000033] rounded-[10px] h-[44px] px-[10px] w-full mt-[20px] registerForm"
                    />
                    <ErrorMessage name="dob" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/gender.svg"
                      alt="Menu Logo"
                      className="absolute top-[30px] left-[10px]"
                      width={24}
                      height={24}
                    />
                    <Field
                      as="select"
                      name="gender"
                      className="placeholder-[#000] border border-solid border-[#00000033] rounded-[10px] h-[44px] pl-[40px] pr-[10px] w-full mt-[20px] registerForm"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" />
                  </div>
                  <button
                    type="submit"
                    className="verify w-full py-[15px] mt-[20px]"
                  >
                    SUBMIT
                  </button>
                </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
