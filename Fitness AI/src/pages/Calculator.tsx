import React, { useState } from 'react';

const App: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmr, setBmr] = useState('');
  const [tdee, setTdee] = useState('');

  const calculateBMI = () => {
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);

    if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0 && weightInKg > 0) {
      const bmiResult = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiResult.toString());
    } else {
      setBmi('');
    }
  };

  const calculateBMR = () => {
    const weightInKg = Number(weight);
    const heightInCm = Number(height);
    const age = 30; // Assuming age is 30 for example

    if (!isNaN(weightInKg) && !isNaN(heightInCm) && weightInKg > 0 && heightInCm > 0) {
      const bmrResult = 10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;
      setBmr(bmrResult.toString());
    } else {
      setBmr('');
    }
  };

  const calculateTDEE = () => {
    const activityLevel = 1.55; // Assuming activity level is 1.55 for example

    if (bmr) {
      const tdeeResult = (Number(bmr) * activityLevel).toFixed(2);
      setTdee(tdeeResult.toString());
    } else {
      setTdee('');
    }
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateBMI();
    calculateBMR();
    calculateTDEE();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" >
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6">Fitness Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              Height (cm)
            </label>
            <input
              type="text"
              id="height"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              type="text"
              id="weight"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Calculate
          </button>
        </form>
        {bmi && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">BMI</h2>
            <p>{bmi}</p>
            <h2 className="text-xl font-bold mb-2">BMR</h2>
            <p>{bmr}</p>
            <h2 className="text-xl font-bold mb-2">TDEE</h2>
            <p>{tdee}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;










