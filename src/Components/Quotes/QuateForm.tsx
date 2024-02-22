"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";
import { sendEmail } from "../EmailService/SendEmai";
import { FaSpinner } from "react-icons/fa";

import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FormikValues,
  FormikErrors,
} from "formik";

const FormikForm = dynamic(() => import("formik").then((mod) => mod.Formik), {
  ssr: false,
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  adultCount: number;
  childCount: number;
  nationality: string;
  specialNote: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  fromDate: "",
  toDate: "",
  adultCount: 0,
  childCount: 0,
  nationality: "",
  specialNote: "",
};
const validateForm = (values: FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};

  // Add validation rules here
  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Phone number validation
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^\+?\d{10,}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }

  // Number of Pax (passengers) validation
  if (values.adultCount + values.childCount <= 0) {
    errors.adultCount = "At least one passenger is required";
  }

  // Nationality validation
  if (!values.nationality) {
    errors.nationality = "Nationality is required";
  }

  return errors;
};

const QuoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSub = async (values: FormValues) => {
    try {
      const templateId = "template_sy1uhyg";
      setIsLoading(true);
      // Replace this with your actual EmailJS Template ID
      await sendEmail(templateId, values);

      // alert("Email sent successfully!");

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Email sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      // alert("An error occurred while sending the email.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while sending the email.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full xl:w-[1170px] mx-auto p-4  md:py-8 md:px-20 xl-px-4 flex flex-col justify-center items-center bg-[#077B83] bg-opacity-10 rounded-[20px]">
      <div className=" flex flex-col xl:ml-[270px] pb-10">
        <h1 className="md:text-[48px] text-[32px] font-bold font-poppins flex flex-col">
          Catch Your Dream:
        </h1>
        <p className="xl:w-[950px] flex flex-col text-[20px]">
          Request a Tailored Quote!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSub}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="w-[100%] xl:w-auto"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="firstName">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="lastName">
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500"/>
                </div>

                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="phoneNumber">
                    Phone Number:
                  </label>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500"/>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="email">
                    Arrival Date:
                  </label>
                  <Field
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="fromDate" component="div" />
                </div>

                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="phoneNumber">
                    Departure Date:
                  </label>
                  <Field
                    type="date"
                    id="toDate"
                    name="toDate"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="toDate" component="div" />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-10 ">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="guests">
                    Number of guests:
                  </label>
                  <div className="flex">
                    <Field
                      as="select"
                      id="adultCount"
                      name="adultCount"
                      className="h-[64.04px] xl:w-[166.21px] rounded-[5px] p-[10px] w-[50%] border-r-[2px] border-solid border-[#444444] rounded-tr-none rounded-br-none"
                    >
                      <option>Adult</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5 Adults</option>
                      <option value="6">6 Adults</option>
                      <option value="7">7 Adults</option>
                      <option value="8">8 Adults</option>
                    </Field>
                    {/* <ErrorMessage name="adultCount" component="div" /> */}

                    <Field
                      as="select"
                      id="childCount"
                      name="childCount"
                      className="h-[64.04px] xl:w-[166.21px] rounded-[5px] p-[10px] w-[50%]"
                    >
                      <option>Child</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Child</option>
                      <option value="3">3 Child</option>
                      <option value="4">4 Child</option>
                      <option value="5">5 Child</option>
                      <option value="6">6 Child</option>
                      <option value="7">7 Child</option>
                      <option value="8">8 Child</option>
                    </Field>
                    {/* <ErrorMessage name="childCount" component="div" /> */}
                  </div>
                  <ErrorMessage name="adultCount" component="div" className="text-red-500"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="nationality">
                    Nationality:
                  </label>
                  <Field
                    type="text"
                    id="nationality"
                    name="nationality"
                    className="h-[64.04px] xl:w-[332.42px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="nationality" component="div" className="text-red-500"/>
                </div>
              </div>

              <div className="flex flex-col  gap-2">
                <label className="font-semibold" htmlFor="specialNote">
                  Special Note:
                </label>
                <Field
                  as="textarea"
                  id="specialNote"
                  name="specialNote"
                  style={{
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                  className="xl:w-[704.48px] w-full lg:h-[99.62px] h-[64.05px] "
                />
                <ErrorMessage name="specialNote" component="div" />
              </div>

              <button
                type="submit"
                className="xl:w-[704.48px] w-full lg:h-[99.62px] h-[64.05px] bg-[#077B83] rounded-[5px] text-[24px] md:text-[40px] leading-[48px] text-[white] font-bold flex flex-row items-center justify-center"
              >
                {isLoading ? (
                  <span className="flex flex-row gap-[30px] items-center">
                    <FaSpinner className="spin" />
                    Loading..
                  </span>
                ) : (
                  "Get My Quote"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuoteForm;
