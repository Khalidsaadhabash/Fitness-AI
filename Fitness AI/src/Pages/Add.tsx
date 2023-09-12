import React, { useState } from 'react';

interface DietType {
  name: string;
  details: string;
  FoodsUsed:string;
}

const dietTypes: DietType[] = [
  {
    name: 'vegan',
    details: 'A vegan diet excludes all animal products, including meat, dairy, eggs, and honey.',
    FoodsUsed:''
  },
  {
    name: 'vegetarian',
    details: 'A vegetarian diet excludes meat but may include dairy, eggs, and other animal-derived products.',
    FoodsUsed:''
  },
  {
    name: 'paleo',
    details: 'The paleo diet focuses on eating foods that were available to our hunter-gatherer ancestors, such as meat, fish, fruits, vegetables, nuts, and seeds.',
    FoodsUsed:"Vegetables and fruit and Nuts and Seeds and Meat and Fish and eggs and Herbs and Spices"
  },
  {
    name: 'keto',
    details: 'The keto (ketogenic) diet is a low-carb, high-fat diet that aims to get your body into a state of ketosis, where it burns fat for energy instead of carbohydrates.',
    FoodsUsed:''
  },
];

const App: React.FC = () => {
  const [dietType, setDietType] = useState('');

  const handleDietTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDietType(event.target.value);
  };

  const selectedDietType = dietTypes.find((type) => type.name === dietType);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Diet App</h1>
      <div className="flex items-center">
        <label htmlFor="diet-type" className="mr-2">
          Select your diet type:
        </label>
        <select
          id="diet-type"
          value={dietType}
          onChange={handleDietTypeChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">-- Select --</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="paleo">Paleo</option>
          <option value="keto">Keto</option>
        </select>
      </div>
      {selectedDietType && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Your selected diet type:</h2>
          <p>{selectedDietType.name}</p>
          <p>{selectedDietType.details}</p>
          <p><p>food</p>{selectedDietType.FoodsUsed}</p>
        </div>
      )}
    </div>
  );
};

export default App;