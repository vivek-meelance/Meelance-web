"use client";
import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";

const Page = () => {
  return (
    <div className="container py-[35px]">
      <div className="flex justify-center m-auto h-auto md:h-[559px] w-auto max-w-[750px] 2xl:max-w-[1000px]">
        <div className="basis-[50%] hidden md:block bg-[url('/loginPic.svg')] bg-no-repeat bg-cover"></div>
        <div className="basis-[100%] sm:basis-[70%] md:basis-[50%] rounded-[20px] md:rounded-[0_20px_20px_0] px-[20px] py-[30px] border-[1px] border-[#00000033]">
          <div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                phoneNumber: "",
                dob: "",
                gender: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                phoneNumber: Yup.string().required("Required"),
                dob: Yup.date().required("Required"),
                gender: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h2 className="text-sm font-bold leading-[17px] tracking-normal">
                    Complete your Signup
                  </h2>
                  <div className="flex flex-col md:flex-row gap-[30px] mt-[20px]">
                    <div>
                      <div className="flex">
                        <Image
                          src="/userIcon.svg"
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
                    <Field name="phoneNumber">
                      {({ field }) => (
                        <PhoneInput
                          country={"in"}
                          value=""
                          inputProps={{
                            name: "phoneNumber",
                            required: true,
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="phoneNumber" />
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
                      src="/gender.svg"
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
                    disabled={isSubmitting}
                    className="verify w-full py-[15px] mt-[20px]"
                  >
                    SUBMIT
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
