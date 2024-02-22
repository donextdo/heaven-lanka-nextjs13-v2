const DurationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="tourDuration">Tour Duration</label>
        </div>
        <select
          id="tourDuration"
          className=" cursor-pointer w-full xl:w-[150px] bg-transparent h-10 rounded-md border border-gray-300 bg-opacity-0 text-sm text-black xl:text-white  pl-3"
        >
          {/* <option value="1" className="text-black">1 Day</option>
          <option value="2" className="text-black">2 Days</option> */}
          <option value="3" className="text-black">3 Days</option>
          <option value="4" className="text-black">4 Days</option>
          <option value="5" className="text-black">5 Days</option>
          <option value="6" className="text-black">6 Days</option>
          <option value="7" className="text-black">7 Days</option>
          <option value="8" className="text-black">8 Days</option>
          <option value="9" className="text-black">9 Days</option>
          <option value="10" className="text-black">10 Days</option>
        </select>
      </div>
    )
  }
  
  export default DurationInput;
  