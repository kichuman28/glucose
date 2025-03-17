const InfoSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-[#205781] mb-4">Key Relationships Between Lactate and Fat Metabolism</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#4F959D] mb-2">Lactate and Exercise Intensity</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>At low-intensity exercise, fat is the primary fuel source.</li>
          <li>As exercise intensity increases, carbohydrate metabolism dominates, producing more lactate.</li>
          <li>At the lactate threshold (LT), lactate production increases rapidly, indicating a shift from fat to carbohydrate metabolism.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#4F959D] mb-2">Fat Oxidation and Lactate Accumulation</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Higher lactate levels indicate greater glycolysis (carbohydrate use) and reduced fat oxidation.</li>
          <li>Lactate clearance is linked to mitochondrial efficiency and fat metabolism.</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#4F959D] mb-2">Model Parameters Explained</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>a:</strong> Baseline fat oxidation (dependent on individual metabolism)</li>
          <li><strong>b:</strong> Negative contribution of lactate (as lactate increases, fat oxidation decreases)</li>
          <li><strong>c:</strong> Potential glucose effect (higher glucose may indicate glycogen metabolism dominance)</li>
          <li><strong>d:</strong> Caffeine increases fat oxidation by promoting lipolysis</li>
          <li><strong>e:</strong> Alcohol suppresses fat metabolism</li>
        </ul>
      </div>
      
      <div className="p-4 bg-[#98D2C0] rounded-lg">
        <h3 className="text-lg font-bold text-[#205781] mb-2">Note:</h3>
        <p>This calculator uses dummy values for demonstration purposes. Real-world data and machine learning models will be implemented in future iterations.</p>
      </div>
    </div>
  );
};

export default InfoSection; 