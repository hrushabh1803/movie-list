import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import MovieDes from './components/movie/Movie-Des'
import MovieList from './components/movie/Movie-list'
import './App.css'




function App() {
 
  return (
    
    <>
     <h1 className='text-center mt-5'>List of Movies 🍿</h1>
    <Routes>
      <Route path="/" element={<MovieList/>}></Route>
      <Route path="movie-des" element={<MovieDes/>}></Route>
      <Route path="*" element={
        <>
        <h1>Page Not found</h1>
        </>
        }></Route>
    </Routes>
    </>
  )
}

export default App
