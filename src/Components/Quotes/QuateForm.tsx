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
  nationality:string;
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
  nationality:"",
  specialNote: "",
};
const validateForm = (values: FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};

  // Add validation rules here

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
    <div className="h-auto w-[1170px] space-y-4  flex flex-col items-center bg-[#077B83] bg-opacity-[10%] rounded-[20px] pt-[60px] pl-[60px] pr-[60px] pb-[60px]">
      <div className=" flex flex-col justify-center items-left   pl-[260px] pb-10">
        <h1 className="text-[48px] font-bold font-poppins text-left">
          Catch Your Dream:
        </h1>
        <p className="w-[980px]  text-left text-[20px]">
          Request a Tailored Quote!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSub}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="firstName">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={{
                      height: "64.04px",
                      width: "332.42px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
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
                    style={{
                      height: "64.04px",
                      width: "332.42px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    style={{
                      height: "64.04px",
                      width: "332.42px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="phoneNumber">
                    Phone Number:
                  </label>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    style={{
                      height: "64.04px",
                      width: "332.42px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>
              </div>
              <div className="flex flex-row gap-10">
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="email">
                  Arrival Date:
                  </label>
                  <Field
                      type="date"
                      id="fromDate"
                      name="fromDate"
                      style={{
                        height: "64.04px",
                        width: "332.42px",
                        borderRadius: "5px 0 0 5px",
                        padding: "10px",
                      }}
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
                      style={{
                        height: "64.04px",
                        width: "332.42px",
                        borderRadius: "0 5px 5px 0",
                        padding: "10px",
                       
                      }}
                    />
                    <ErrorMessage name="toDate" component="div" />
                </div>
              </div>
              <div className="flex flex-row gap-10 ">
              
                <div className="flex flex-col  gap-2">
                  <label className="font-semibold" htmlFor="guests">
                  Number of guests:
                  </label>
                  <div className="flex">
                    <Field
                      as="select"
                      id="guests.adl"
                      name="guests.adl"
                      style={{
                        height: "64.04px",
                        width: "166.21px",
                        borderRadius: "5px 0 0 5px",
                        borderRadiusRight:"none",
                        padding: "10px",
                        borderRight:"2px solid #444444"
                      }}
                    >
                      <option >Adult</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5 Adults</option>
                      <option value="6">6 Adults</option>
                      <option value="7">7 Adults</option>
                      <option value="8">8 Adults</option>
                    </Field>
                    <ErrorMessage name="guests.adl" component="div" />

                    <Field
                      as="select"
                      id="guests.chl"
                      name="guests.chl"
                      style={{
                        height: "64.04px",
                        width: "166.21px",
                        borderRadius: "0 5px 5px 0",
                        
                        padding: "10px",
                     
                      }}
                    >
                       <option >Child</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Child</option>
                      <option value="3">3 Child</option>
                      <option value="4">4 Child</option>
                      <option value="5">5 Child</option>
                      <option value="6">6 Child</option>
                      <option value="7">7 Child</option>
                      <option value="8">8 Child</option>
                    </Field>
                    <ErrorMessage name="guests.chl" component="div" />
                  </div>

               
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="nationality">
                  Nationality:
                  </label>
                  <Field
                    type="text"
                    id="nationality"
                    name="nationality"
                    style={{
                      height: "64.04px",
                      width: "332.42px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                  <ErrorMessage name="nationality" component="div" />
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
                    height: "138.25px",
                    width: "704.48px",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
                <ErrorMessage name="specialNote" component="div" />
              </div>

              <button
                type="submit"
                className="w-[704.48px] h-[99.62px] bg-[#077B83] rounded-[5px] text-[40px] leading-[48px] text-[white] font-bold"
              >
                {isLoading ? (
                  <span className="flex flex-row gap-[30px]">
                    <FaSpinner className="spin" />
                    Loading..
                  </span>
                ) : (
                  "Get My Quote"
                )}
                <style jsx>
                  {`
                    button {
                      display: flex;
                      flex-direction: row;
                      gap: 10px;
                      align-items: center;
                      justify-content: center;
                      padding: 10px 20px;
                      cursor: ${isLoading ? "not-allowed" : "pointer"};
                      opacity: ${isLoading ? 0.7 : 1};
                      transition: opacity 0.3s;
                    }

                    .spin {
                      animation: spin 1s linear infinite;
                      margin-right: 5px;
                    }

                    @keyframes spin {
                      from {
                        transform: rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg);
                      }
                    }
                  `}
                </style>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuoteForm;
