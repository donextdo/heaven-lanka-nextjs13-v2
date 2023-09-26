import { SetStateAction, useEffect, useState } from "react";

const DateInput = () => {
  const [minDateString, setMinDateString] = useState("");
  const [selectedArrivalDate, setSelectedArrivalDate] = useState("");
  const [selectedReturnDate, setSelectedReturnDate] = useState("");

  useEffect(() => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    setMinDateString(minDate.toISOString().split("T")[0]);
  }, []);

  const handleArrivalDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArrivalDate(e.target.value as string);
    if (new Date(e.target.value) > new Date(selectedReturnDate)) {
      setSelectedReturnDate("");
    }
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReturnDate(e.target.value as string);
  };

  return (
    <div className="mb-4">
      <div className="mb-2 font-bold text-gray-300 text-lg">
        <label htmlFor="travellingDate">Travelling Date</label>
      </div>
      <div className="flex gap-2">
        <div className="h-10 rounded-md border border-gray-300 w-[100%]">
          <input
            type="date"
            id="travellingDate"
            name="travellingDate"
            min={minDateString}
            value={selectedArrivalDate}
            onChange={handleArrivalDateChange}
            className="w-[50%] xl:w-[180px] bg-transparent h-10 text-sm cursor-pointer text-black md:text-white pl-3 pr-3"
          />
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            min={selectedArrivalDate} 
            value={selectedReturnDate}
            onChange={handleReturnDateChange}
            className="w-[50%] xl:w-[180px] bg-transparent h-10 text-sm cursor-pointer text-black md:text-white pl-3 pr-3"
          />
        </div>
      </div>
    </div>
  );
};

export default DateInput;
