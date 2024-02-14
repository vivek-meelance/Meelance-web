import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "react-select";
import * as Yup from "yup";

const countryOptions = [
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  //   { value: "+44", label: "+44 (United Kingdom)" }
  // Add more country codes as needed
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent", // Set background color to transparent
    border: state.isFocused ? "0px solid blue" : "0px solid gray", // Example border styling
    // You can add more custom styles as needed
  }),
  // Add more custom styles for other elements if needed
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.object().shape({
    country: Yup.object().required("Country is required"),
    number: Yup.string().required("Mobile number is required"),
  }),
  email: Yup.string().email("Invalid email").required("Email is required"),
  portfolioLink: Yup.string()
    .url("Invalid URL")
    .required("Portfolio link is required"),
});

const EasyAccessForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };
  return (
    <>
      <h2 className="text-[35px] text-[#fff] text-center font-black leading-10 tracking-normal mt-[20px]">
        Request early access{" "}
      </h2>
      <p className="text-[17px] font-bold leading-5 tracking-normal text-center text-[#fff] mt-[30px]">
        Thank you for your interest in our upcoming release! Please fill out the
        form below to get early access and stay updated on our latest
        developments.
      </p>
      <Formik
        initialValues={{
          name: "",
          mobile: { country: null, number: "" },
          email: "",
          portfolioLink: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-[30px]">
            <div className="flex flex-wrap">
              <div className=" flex-1">
                <label
                  htmlFor="name"
                  className="text-sm font-normal leading-4 tracking-normal text-left text-[#fff] block my-[10px]"
                >
                  Name
                </label>
                <div className="relative">
                    <Field
                    type="text"
                    id="name"
                    name="name"
                    className="bg-[rgba(25,25,25,1)] py-[10px] px-[16px] pl-[30px] text-[#ffff] text-sm font-normal leading-[17px] tracking-normal rounded-xl w-[239px]"
                    />
                    <Image src="/user_Icon.svg" alt="Menu Logo" width={24} height={24} className="absolute top-[9px] left-[5px]" />
                </div>
                <ErrorMessage name="name" component="div" />
              </div>
              <div className=" flex-1">
                <label
                  htmlFor="mobile"
                  className="text-sm font-normal leading-4 tracking-normal text-left text-[#fff] my-[10px]"
                >
                  Phone number
                </label>
                <div className="flex bg-[rgba(25,25,25,1)]  py-[10px] px-[16px] rounded-xl h-[50px] w-[320px]">
                  <Field name="mobile" className="bg-transparent">
                    {({ field }) => (
                      <Select
                        {...field}
                        options={countryOptions}
                        placeholder="Select Country Code"
                        styles={customStyles}
                      />
                    )}
                  </Field>
                  <Field
                    type="text"
                    id="mobileNumber"
                    name="mobile.number"
                    placeholder="Enter Number"
                    className="bg-transparent w-auto"
                  />
                </div>
                <ErrorMessage name="mobile" component="div" />
              </div>
              <div className=" flex-1">
                <label
                  htmlFor="email"
                  className="text-sm font-normal leading-4 tracking-normal text-left text-[#fff] block my-[10px]"
                >
                  Email
                </label>
                <div className="relative">
                    <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-[rgba(25,25,25,1)] py-[10px] px-[16px] pl-[30px] text-[#ffff] text-sm font-normal leading-[17px] tracking-normal rounded-xl w-[239px]"
                    />
                    <Image src="/easy_mail.svg" alt="Menu Logo" width={20} height={20} className="absolute top-[9px] left-[7px]" />
                </div>
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="portfolioLink"
                  className="text-sm font-normal leading-4 tracking-normal text-left text-[#fff] block my-[10px]"
                >
                  Social media profile URL
                </label>
                <div className="relative">
                    <Field
                    type="text"
                    id="portfolioLink"
                    name="portfolioLink"
                    className="bg-[rgba(25,25,25,1)] py-[10px] px-[16px] pl-[32px] text-[#ffff] text-sm font-normal leading-[17px] tracking-normal rounded-xl w-[239px]"
                    />
                    <Image src="/iconamoon_link-thin.svg" alt="Menu Logo" width={24} height={24} className="absolute top-[9px] left-[5px]" />
                </div>
                <ErrorMessage name="portfolioLink" component="div" />
              </div>
            </div>
            {/* <button type="submit" disabled={isSubmitting}> */}
            <p className="text-sm font-extralight leading-4 tracking-normal text-center text-[#fff] mt-[50px]">By submitting this form, you agree to receive communications from us regarding the Early Access program. Your information will be handled in accordance with our privacy policy. We value your privacy and will not share your personal information with third parties.</p>
            <div className="w-full flex justify-center mt-[50px]">
                <button
                type="submit"
                disabled={isSubmitting}
                className="text-[#fff] bg-[#bf75e5] w-[329px] rounded-xl py-2 mx-auto"
                >
                Submit
                </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EasyAccessForm;
