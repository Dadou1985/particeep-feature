import { useState, useEffect } from 'react';
import './App.css';
import {movies$} from './utils/movies'
import MoviesComponent from './component/moviesComponent';
import ReactPaginate from 'react-paginate';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {
  const [moviesData, setMoviesData] = useState([])
  const [category, setCategory] = useState("")
  const [filter, setFilter] = useState([])

  useEffect(() => {
   const storageData = localStorage.getItem('currentMovies')
   
   async function fetchData(){
    const response = await movies$
    setFilter(response.map(movie => movie.category))
    setMoviesData(response)
   }

   if(storageData){
     setFilter(JSON.parse(storageData).map(movie => movie.category))
     setMoviesData(JSON.parse(storageData))
   }else{
     fetchData()
   }
  }, [])
  

  function handleFilterMovies(category) {
    const filteredMovies = moviesData.filter(movie => movie.category === category)
    return setMoviesData(filteredMovies)
  }

  const handleChange = (event) => {
    return setCategory(event.target.value);
  };
  
  const categoryList = filter && [...new Set(filter)]

  console.log("++++++", categoryList)


  return (
    <div className="App">
      <header>
        <FormControl style={{width: "20%"}}>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Catégorie"
            onChange={handleChange}
          >
            <MenuItem value="">Tous les films</MenuItem>
            {categoryList.map(category => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </header>
      <MoviesComponent data={moviesData} category={category} />
    </div>
  );
}

export default App;
