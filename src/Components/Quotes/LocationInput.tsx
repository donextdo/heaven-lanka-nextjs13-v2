const LocationInput = () => {
    return (
      <div className="mb-4">
        <div className="mb-2 font-bold text-gray-300 text-lg">
          <label htmlFor="location">Location</label>
        </div>
        <select
          id="location"
          className="w-full xl:w-[200px] bg-transparent h-10 rounded-md outline-none border border-white-300 bg-opacity-0 text-sm xl:text-white text:black xl:px-4 pl-3 cursor-pointer"
        >
          <option value="Colombo" className="text-black">Colombo</option>
          <option value="Galle" className="text-black">Galle</option>
          <option value="Kandy" className="text-black">Kandy</option>
          <option value="Matara" className="text-black">Matara</option>
        </select>
      </div>
    );
  }
  
  export default LocationInput;
  