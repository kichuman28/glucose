const ResultsDisplay = ({ fatOx }) => {
  return (
    <div className="mt-8 p-4 bg-[#205781] rounded-lg text-center">
      <h3 className="text-xl font-bold text-[#F6F8D5] mb-2">Fat Oxidation Result</h3>
      <div className="text-4xl font-bold text-[#F6F8D5]">
        {fatOx} g/min
      </div>
    </div>
  );
};

export default ResultsDisplay; 