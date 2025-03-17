import { useState, useEffect } from 'react';
import ParameterSlider from './components/parameter_slider';
import ResultsDisplay from './components/results_display';
import FormulaDisplay from './components/formula_display';
import Header from './components/header';
import InfoSection from './components/info_section';

function App() {
  // Default parameter values
  const [params, setParams] = useState({
    a: 0.5, // Baseline fat oxidation
    b: 0.08, // Negative contribution of lactate
    c: 0.02, // Potential glucose effect
    d: 0.03, // Caffeine effect
    e: 0.05, // Alcohol effect
  });

  // Constant metabolic values
  const constants = {
    lactate: 1.2, // mmol/L
    glucose: 5.0, // mmol/L
    caffeine: 0, // Default start with no caffeine
    alcohol: 0,  // Default start with no alcohol
  };

  // States for adjustable metabolic values
  const [metabolicValues, setMetabolicValues] = useState({
    caffeine: constants.caffeine,
    alcohol: constants.alcohol,
  });

  // Calculate FatOx
  const calculateFatOx = () => {
    return (
      params.a - 
      params.b * constants.lactate + 
      params.c * constants.glucose + 
      params.d * metabolicValues.caffeine - 
      params.e * metabolicValues.alcohol
    ).toFixed(3);
  };

  // Update a parameter value
  const updateParam = (param, value) => {
    setParams(prev => ({ ...prev, [param]: parseFloat(value) }));
  };

  // Update metabolic value
  const updateMetabolicValue = (name, value) => {
    setMetabolicValues(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  return (
    <div className="min-h-screen bg-[#F6F8D5] font-quicksand">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <FormulaDisplay />
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#98D2C0] p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-[#205781] mb-4">Model Parameters</h2>
              <ParameterSlider 
                label="Baseline fat oxidation (a)" 
                value={params.a} 
                onChange={(e) => updateParam('a', e.target.value)}
                min={0} max={2} step={0.01} 
              />
              <ParameterSlider 
                label="Lactate contribution (b)" 
                value={params.b} 
                onChange={(e) => updateParam('b', e.target.value)}
                min={0} max={0.5} step={0.01} 
              />
              <ParameterSlider 
                label="Glucose effect (c)" 
                value={params.c} 
                onChange={(e) => updateParam('c', e.target.value)}
                min={-0.1} max={0.1} step={0.01} 
              />
              <ParameterSlider 
                label="Caffeine effect (d)" 
                value={params.d} 
                onChange={(e) => updateParam('d', e.target.value)}
                min={0} max={0.1} step={0.01} 
              />
              <ParameterSlider 
                label="Alcohol effect (e)" 
                value={params.e} 
                onChange={(e) => updateParam('e', e.target.value)}
                min={0} max={0.2} step={0.01} 
              />
            </div>
            
            <div className="bg-[#4F959D] p-6 rounded-lg shadow text-white">
              <h2 className="text-2xl font-bold mb-4">Metabolic Values</h2>
              <div className="mb-4">
                <p className="font-bold">Lactate: <span className="text-[#F6F8D5]">{constants.lactate} mmol/L</span> (constant)</p>
                <p className="font-bold">Glucose: <span className="text-[#F6F8D5]">{constants.glucose} mmol/L</span> (constant)</p>
              </div>
              
              <ParameterSlider 
                label="Caffeine" 
                value={metabolicValues.caffeine} 
                onChange={(e) => updateMetabolicValue('caffeine', e.target.value)}
                min={0} max={10} step={0.1} 
                lightTheme={false}
              />
              <ParameterSlider 
                label="Alcohol" 
                value={metabolicValues.alcohol} 
                onChange={(e) => updateMetabolicValue('alcohol', e.target.value)}
                min={0} max={5} step={0.1} 
                lightTheme={false}
              />
              
              <ResultsDisplay fatOx={calculateFatOx()} />
            </div>
          </div>
        </div>
        
        <InfoSection />
      </main>
      
      <footer className="bg-[#205781] text-white p-4 text-center">
        <p>© {new Date().getFullYear()} Fat Oxidation Calculator</p>
      </footer>
    </div>
  );
}

export default App;
