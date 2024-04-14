import React, {useState, useEffect} from 'react'
import './banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);

        const fetchData = () =>{
            fetch('http://localhost:3000/data/movieData.json')///fetching restful api data and turning them into the "movies"
            .then(res=>res.json())
            .then(data => setMovies(data)) ///turning the empty array into the data from the json
            .catch(e=>console.log(e.message));
        };

        useEffect()






  return (
    <div className="Banner">

    </div>
  )
}

export default Banner