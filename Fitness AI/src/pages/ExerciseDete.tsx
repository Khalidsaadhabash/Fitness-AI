
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Box, Button } from '@mui/material';

interface Exercise {
  id: string;
  name: string;
  equipment: string;
  gifUrl: string;
  bodyPart: string;
  target:string
}

const exercisesPerPage = 10;
const App: React.FC = () => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
     const [pageCount, setPageCount] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  


  useEffect(() => {
    const fetchExercises = async ( page: number) => {
      try {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          headers: {
            'x-rapidapi-key': 'ecdd69af15mshe176c9d1be621aep1026fcjsn030fc117abc2',
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

 
// const handleSearchc=()=>{}
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setCurrentPage(0);
  };


  const handlePageChange = (selected: { selected: number }) => {
    const nextPage = selected.selected + 1;
    setCurrentPage(nextPage);
  };
  const handleBodyPartSelect = (bodyPart: string ) => {
    setSelectedBodyPart(bodyPart);
  };
  const uniqueBodyParts = [...new Set(exercises.map((exercise) => exercise.bodyPart))];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fitness App</h1>
     
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
              <h2 className=" font-semibold text-slate-600 mb-2 block font-semibold text-xl">{exercise.name}</h2>
              <p>{exercise.equipment}</p>
              <p className=' bg-orange-500 rounded-full w-fit text-white text-xs font-bold px-1 py-1 leading-none flex items-center'>{exercise.target}</p>
             
            </div>
          ))}
      </div>
      <ReactPaginate
         previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            pageCount={pageCount}
             onClick={handlePageChange}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center py-4"
            pageClassName="mr-1"
            activeClassName="font-bold text-blue-500"
            disabledClassName="opacity-50 cursor-not-allowed"
            breakClassName="mx-1"
            previousClassName="mr-1"
            nextClassName="ml-1"
            pageLinkClassName="px-3 py-1 rounded-md bg-white border border-gray-300 hover:bg-gray-200"
            activeLinkClassName="bg-blue-500 text-white"
            previousLinkClassName="px-3 py-1 rounded-md bg-white border border-gray-300 hover:bg-gray-200"
            nextLinkClassName="px-3 py-1 rounded-md bg-white border border-gray-300 hover:bg-gray-200"
          />
    </div>
  );
};

export default App;







