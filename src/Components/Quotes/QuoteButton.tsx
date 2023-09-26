import { useState } from "react";
import PopUp from "./PopUp";

const QuoteButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

    return (
      <div className="mb-4">
        <button className="w-full xl:w-[180px] h-12 xl:h-[70px] bg-[#dfdada] 2xl:bg-white rounded-md xl:rounded-lg text-[#077B83] font-bold md:text-xl text-lg mt-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" onClick={handlePopup}>
          Get Quote
        </button>
        {showPopup && <PopUp setShowPopup={setShowPopup} />}
      </div>
    );
  }
  
  export default QuoteButton;
  