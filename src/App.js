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
  const [moviePerPage, setMoviePerPage] = useState(4)
  const [pageNumber, setPageNumber] = useState(0)

  const pageVisited = pageNumber * moviePerPage

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

  const handleChangeCategory = (event) => {
    return setCategory(event.target.value);
  };

  const handleChangeMoviePerPage = (event) => {
    return setMoviePerPage(event.target.value);
  };
  
  const categoryList = filter && [...new Set(filter)]
  const pageCount = Math.ceil(moviesData.length / moviePerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  console.log("++++++", categoryList)


  return (
    <div className="App">
      <header>
      <FormControl className='header-select'>
          <InputLabel id="demo-simple-select-label">Films par page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={moviePerPage}
            label="Films par page"
            onChange={handleChangeMoviePerPage}
          >
            <MenuItem value={4}>Par lot de 4</MenuItem>
            <MenuItem value={8}>Par lot de 8</MenuItem>
            <MenuItem value={12}>Par lot de 12</MenuItem>
          </Select>
        </FormControl>
        <FormControl className='header-select'>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Catégorie"
            onChange={handleChangeCategory}
          >
            <MenuItem value="">Tous les films</MenuItem>
            {categoryList.map(category => (
              <MenuItem value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </header>
      <MoviesComponent data={moviesData} category={category} pageVisited={pageVisited} moviePerPage={moviePerPage} />
      <div>
        <ReactPaginate
          previousLabel='Précédent'
          nextLabel="Suivant"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-container"
          nextLinkClassName='change-button'
          previousLinkClassName='change-button'
          disabledClassName='pagination-disabled'
          activeClassName='active-page'
          pageLinkClassName='page-number'
        />
      </div>
    </div>
  );
}

export default App;
