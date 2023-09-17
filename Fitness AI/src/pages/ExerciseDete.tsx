import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbarpages from '../components/Navbarpages';
// import ReactPaginate from 'react-paginate';


interface Exercise {
  id: string;
  name: string;
  equipment: string;
  gifUrl: string;
  bodyPart: string;
  target:string
}


const App: React.FC = () => {
  
    const [currentPage, setCurrentPage] = useState(0);
    setCurrentPage
    
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  


  useEffect(() => {
    const fetchExercises = async ( page: number) => {
      page
      try {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            //
            //
            'x-rapidapi-key': 'ecdd69af15mshe176c9d1be621aep1026fcjsn030fc117abc2',
            //'X-RapidAPI-Key': '900cd10414mshf67e0fca351df81p1b073djsn5816b1d4c9f9',
            
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setExercises(response.data.splice(0,299));
        console.log(response.data.splice(0,299));;
        
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises(currentPage);
  }, []);

  const handleBodyPartSelect = (bodyPart: string ) => {
    setSelectedBodyPart(bodyPart);
  };
  const uniqueBodyParts = [...new Set(exercises.map((exercise) => exercise.bodyPart))];
  return (
    
    <div className="container mx-auto p-4 bg-white">
      <Navbarpages/>
   
      <div className="text-2xl font-bold text-gray-100 md:text-5xl">
            <p className='text-black'>Exercises <span className=' text-orange-400'>Fitness</span></p>
            </div>
            <br></br>
     
      <div className="overflow-y-auto whitespace-nowrap mb-4 ">
        {uniqueBodyParts.map((bodyPart) => (
          <button
            key={bodyPart}
            className={`inline-block px-4 py-2 rounded-lg mx-2    ${
              selectedBodyPart === bodyPart ? 'bg-slate-400 text-white' : 'bg-gray-200 text-gray-800'
            }`} 
            onClick={() => handleBodyPartSelect(bodyPart)}
          >
           <p className='text-current'>{bodyPart}</p> 
          </button>
        ))}
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises
          .filter((exercise) => !selectedBodyPart || exercise.bodyPart === selectedBodyPart)
          .map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg p-4">
              <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-fit object-cover mb-4" />
              <h2 className=" font-semibold text-slate-600 mb-2 block  text-xl">{exercise.name}</h2>
              <p>{exercise.equipment}</p>
              <p className=' bg-orange-500 rounded-full w-fit text-white text-xs font-bold px-1 py-1 leading-none flex items-center'>{exercise.target}</p>
             
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;