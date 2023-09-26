import SubButton from "./button";

const InputField = () => {
  return (
    <div className="flex flex-row w-full md:flex-row items-center lg:w-[625px] md:w-[550px] bg-white rounded-[10px] pr-2">
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="w-full md:w-[400px] h-[68px] bg-[#FFFFFF] rounded-[10px] p-[20px]  md:mb-0 md:mr-4"
      />

      <div>
        <SubButton />
      </div>
    </div>
  );
};

export default InputField;


