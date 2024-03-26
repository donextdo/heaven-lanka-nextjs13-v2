const SubButton = ({ disabled }:any) => {
    return (
      <div>
        <button type="submit" disabled={disabled} className="w-[120px] h-[54px] md:w-[200px] md:h-[54px] bg-[#FA7436] border border-2px border-white md:bg-[#FA7436] rounded-[10px] text-[#FFFFFF]">
          Subscribe
        </button>
      </div>
    );
  };
  
  export default SubButton;
  