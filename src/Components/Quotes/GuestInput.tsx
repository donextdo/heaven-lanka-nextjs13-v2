const DurationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="guests">Guests</label>
        </div>
        <select
          id="guests"
          className="w-full xl:w-[150px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm cursor-pointer text-black xl:text-white pl-3"
        >
          <option value="1" className="text-black"> 1 Guest</option>
          <option value="2" className="text-black"> 2 Guests</option>
          <option value="3" className="text-black"> 3 Guests</option>
          <option value="4" className="text-black"> 4 Guests</option>
          <option value="5" className="text-black"> 5 Guests </option>
        </select>
      </div>
    );
  }
  
  export default DurationInput;
  