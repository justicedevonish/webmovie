import React, {useState, useEffect} from 'react'
import './banner.css';
import backgroundImage from '.././images/bg-spiderverse.jpg'
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import MovieTrailerButton from '../components/MovieTrailerButton';
import MovieSwiper from '../components/MovieSwiper';


function Banner() {
    const [movies, setMovies] = useState([]);

        const fetchData = () =>{
            fetch('http://localhost:3000/data/movieData.json')///fetching restful api data and turning them into the "movies array"
            .then(res=>res.json())
            .then(data => setMovies(data)) ///turning the empty array into the data from the movie data json
            .catch(e=>console.log(e.message));
        };

        useEffect(() => {
            fetchData();
        },[]);

        const handleSlideChange = id => {
            console.log(id);
        }

  return (
    <div className="banner">
        
        <div className="movie">
            <img src={backgroundImage} alt='Background Image' className="backgroundImage active"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 cold-md-12">
                        <MovieContent />
                    </div>
                    <div className="col-lg-6 cold-md-12">
                        <MovieDate />
                        <MovieTrailerButton />    
                    </div>
                </div>
            </div>
        </div>
        {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange = {handleSlideChange}/>}
    </div>
  );
}

export default Banner