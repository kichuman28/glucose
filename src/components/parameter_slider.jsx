const ParameterSlider = ({ label, value, onChange, min, max, step, lightTheme = true }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label 
          className={`font-medium ${lightTheme ? 'text-[#205781]' : 'text-white'}`}
        >
          {label}
        </label>
        <span 
          className={`${lightTheme ? 'text-[#205781] bg-[#F6F8D5]' : 'text-[#205781] bg-[#F6F8D5]'} px-2 py-1 rounded font-bold`}
        >
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#205781]"
      />
    </div>
  );
};

export default ParameterSlider; 