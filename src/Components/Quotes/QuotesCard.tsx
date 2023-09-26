import DateInput from "./DateInput";
import DurationInput from "./Duration";
import GuestInput from "./GuestInput";
import LocationInput from "./LocationInput";
import QuoteButton from "./QuoteButton";

const QuotesCard = () => {
  return (
    <div className='xl:w-[1170px] w-full mx-auto px-4 xl:px-0 py-8 xl:py-8 space-y-4 bg-[gostwhite]  xl:bg-white xl:rounded-[20px] xl:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] xl:drop-shadow-lg xl:backdrop-blur-sm  xl:bg-opacity-[15%] pl-[30px]  rounded-md shadow-lg  xl:bg-opacity-15'>
      <div className="flex flex-col xl:flex-row md:gap-x-4 md:px-8">
        <LocationInput />
        <DateInput />
        <DurationInput />
        <GuestInput />
        <QuoteButton />
      </div>
    </div>
  );
}

export default QuotesCard;
