'use client'
import { useState } from "react";
import SubButton from "./button";
import Swal from "sweetalert2";

const InputField = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setSubmitting(true);
    // Update the fetch URL
    fetch('https://script.google.com/macros/s/AKfycbzy-Gu8nwnsI3G4JuhTDfCFZIoB11r4PBrJyphq8wj2qUTK3fj8_0Q3ii4_fecmGdFa/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}`,
    })

    .then(response => {
      console.log('Success:', response);
      // Display success alert
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Subscription successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      setEmail('');
    })
    .catch(error => 
      {
        console.error('Error:', error)
        // Display error alert
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Oops...",
          text: "An error occurred while subscription.",
          showConfirmButton: false,
          timer: 1500,
        });
        setEmail('');
      })
      .finally(() => {
        setSubmitting(false); // Reset submitting to false after submission completes
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row w-full md:flex-row items-center lg:w-[625px] md:w-[550px] bg-white rounded-[10px] pr-2">
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="w-full md:w-[400px] h-[68px] bg-[#FFFFFF] rounded-[10px] p-[20px]  md:mb-0 md:mr-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div>
        <SubButton disabled={submitting}/>
      </div>
    </div>
    </form>
    
  );
};

export default InputField;


