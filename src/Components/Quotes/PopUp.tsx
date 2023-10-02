"use client";
import { SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";
import { sendEmail } from "../EmailService/SendEmai";
import { FaSpinner } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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

  return errors;
};

const QuoteForm = ({ setShowPopup }: any) => {
  const [minDateString, setMinDateString] = useState("");
  const [selectedArrivalDate, setSelectedArrivalDate] = useState("");

  useEffect(() => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    setMinDateString(minDate.toISOString().split("T")[0]);
  }, []);

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

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="absolute inset-0 z-100 grid place-items-center bg-slate-900 bg-opacity-80 top-[240px] xl:top-[0px]">
      <div className="py-4 px-4 mx-auto flex flex-col relative bg-white shadow-md rounded-md w-full ">
        <button
          className="absolute top-8 right-10 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          <MdClose size={40} />
        </button>
        <div className="w-full xl:w-[1170px] mx-auto p-4 md:py-8 flex flex-col justify-center items-center bg-[#077B83] bg-opacity-10 rounded-[20px]">
          <div className=" flex flex-col pb-10 xl:ml-[270px] md:ml-[-275px]">
            <h1 className="md:text-[48px] text-[32px] font-bold font-poppins flex flex-col">
              Catch Your Dream:    
            </h1>
            <p className="xl:w-[980px] flex flex-col text-[20px]">
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
                  <div className="flex flex-col md:flex-row gap-10">
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
                  <div className="flex flex-col md:flex-row gap-10">
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
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col  gap-2">
                      <label className="font-semibold" htmlFor="email">
                        Arrival Date:
                      </label>
                      <Field
                        type="date"
                        id="fromDate"
                        name="fromDate"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedArrivalDate}
                        onChange={(e: {
                          target: { value: SetStateAction<string> };
                        }) => setSelectedArrivalDate(e.target.value)}
                        style={{
                          height: "64.04px",
                          width: "332.42px",
                          borderRadius: "5px",
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
                        min={selectedArrivalDate}
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
                  <div className="flex flex-col md:flex-row gap-10 ">
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
                            borderRadiusRight: "none",
                            padding: "10px",
                            borderRight: "2px solid #444444",
                          }}
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
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                      className="md:w-[704.48px] w-full md:h-[99.62px] h-[64.05px] "
                    />
                    <ErrorMessage name="specialNote" component="div" />
                  </div>

                  <button
                    type="submit"
                    className="md:w-[704.48px] w-full md:h-[99.62px] h-[64.05px] bg-[#077B83] rounded-[5px] text-[24px] md:text-[40px] leading-[48px] text-[white] font-bold flex flex-row items-center justify-center"
                  >
                    {isLoading ? (
                      <span className="flex flex-row gap-[30px] items-center">
                        <FaSpinner className="spin" />
                        Loading..
                      </span>
                    ) : (
                      "Get My Quote"
                    )}
                    {/* <style jsx>
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
                </style> */}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
