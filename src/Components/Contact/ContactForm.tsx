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
  specialNote: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  specialNote: "",
};
const validateForm = (values: FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const ContactForm = ({ setShowPopup }: any) => {
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
      setIsLoading(true);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while sending the message.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full xl:w-[1170px] mx-auto p-4 md:py-[80px] flex flex-col justify-center items-center bg-[#077B83] bg-opacity-10 rounded-[25px]">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSub}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit} className="w-[100%]">
            <div className="flex flex-col gap-8 items-center w-full">
                <div className="flex flex-col  gap-2 w-full lg:w-auto">
                  <Field
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="h-[64px] lg:w-[706px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>

                <div className="flex flex-col gap-2 w-full lg:w-auto">
                  <Field
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="h-[64px] lg:w-[706px] rounded-[5px] p-[10px] sm:w-full"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
                <div className="flex flex-col  gap-2 w-full lg:w-auto">
                  <Field
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="h-[64px] lg:w-[706px] rounded-[5px] p-[10px] w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500"/>
                </div>

              <div className="flex flex-col  gap-2 w-full lg:w-auto">
                <Field
                  placeholder="Message"
                  as="textarea"
                  id="specialNote"
                  name="specialNote"
                  style={{
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                  className="lg:w-[704.48px] w-full md:h-[99.62px] h-[64.05px] sm:w-full"
                />
                <ErrorMessage name="specialNote" component="div" />
              </div>

              <button
                type="submit"
                className="lg:w-[704.48px] w-full xl:h-[99.62px] h-[64.05px] bg-[#FA7436] rounded-[5px] text-[24px] md:text-[40px] leading-[48px] text-[white] font-bold flex flex-row items-center justify-center"
              >
                {isLoading ? (
                  <span className="flex flex-row gap-[30px] items-center">
                    <FaSpinner className="spin" />
                    Loading..
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
