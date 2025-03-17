const FormulaDisplay = () => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-[#205781] mb-4">Fat Oxidation Model</h2>
      <div className="p-4 bg-[#4F959D] rounded-lg inline-block text-white">
        <p className="text-xl md:text-2xl">
          FatOx = a - b×[Lactate] + c×[Glucose] + d×[Caffeine] - e×[Alcohol]
        </p>
      </div>
      <p className="mt-2 text-sm text-gray-600">Adjust the parameters to see how they affect fat oxidation</p>
    </div>
  );
};

export default FormulaDisplay; 