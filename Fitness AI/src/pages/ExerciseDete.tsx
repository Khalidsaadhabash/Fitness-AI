
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
        const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
            params: {
                perPage: exercisesPerPage,
                page: page + 1,
                search: search,
                          },
          headers: {
            'x-rapidapi-key': 'ebd9867c47msh45300d0b59f854bp19a5dcjsn970215ddcae7',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
          },
        });

        setExercises
        
        (response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises(currentPage);
  }, [currentPage, search]);
// const handleSearchc=()=>{}
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setCurrentPage(0);
  };


  const handlePageChange = (selected: { selected: number }) => {
    const nextPage = selected.selected + 1;
    setCurrentPage(nextPage);
  };
  const handleBodyPartSelect = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fitness App</h1>
      <input
        type="text"
        placeholder="Search exercises..."
        value={search}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="overflow-x-auto whitespace-nowrap mb-4">
        {exercises.map((exercise) => (
          <button
            key={exercise.bodyPart}
            className={`inline-block px-4 py-2 rounded-lg mx-2  ${
              selectedBodyPart === exercise.bodyPart ? 'bg-slate-400 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleBodyPartSelect(exercise.bodyPart)}
          >
            {exercise.bodyPart}
          </button>
        ))}
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises
          .filter((exercise) => !selectedBodyPart || exercise.bodyPart === selectedBodyPart)
          .map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg p-4">
              <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-fit object-cover mb-4" />
              <h2 className="text-lg font-semibold mb-2">{exercise.name}</h2>
              <p>{exercise.equipment}</p>
             
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







