import React,{useState, useEffect} from "react";
import './app.sass'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=6d6754d7';

const movie1 = {
"Title": "Superman, Spiderman or Batman",
"Type": "movie",
"Year": "2011",
"imdbID": "tt2084949",
"Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data =  await response.json();
        
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('Spiderman')
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
        {
            movies?.length > 0
             ? (
                <div className="container">
                {movies.map((movie) =>(
                   <MovieCard movie={movie}/> 
                ))}
              </div>
             ) :
             (
                 <div className="empty">
                     <h2>No Movies Found</h2>
                 </div>
             )


        }

    </div>
    );
}

export default App;