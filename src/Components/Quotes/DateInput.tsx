import { SetStateAction, useEffect, useState } from "react";

const DateInput = () => {
  const [minDateString, setMinDateString] = useState("");
  const [selectedArrivalDate, setSelectedArrivalDate] = useState("");

  useEffect(() => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    setMinDateString(minDate.toISOString().split("T")[0]);
  }, []);
  return (
    <div className="mb-4">
      <div className="mb-2 font-bold text-gray-300 text-lg">
        <label htmlFor="travellingDate">Travelling Date</label>
      </div>
      <div className="flex gap-2">
        <div className="h-10 rounded-md border border-gray-300 ">
          <input
            type="date"
            id="travellingDate"
            name="travellingDate"
            min={new Date().toISOString().split("T")[0]}
            value={selectedArrivalDate}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setSelectedArrivalDate(e.target.value)
            }
            className="bg-transparent h-10 text-sm cursor-pointer text-black md:text-white pl-3 pr-3"
          />
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            min={new Date().toISOString().split("T")[0]}
            value={selectedArrivalDate}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setSelectedArrivalDate(e.target.value)
            }
            className="bg-transparent h-10 text-sm cursor-pointer text-black md:text-white pl-3 pr-3"
          />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
