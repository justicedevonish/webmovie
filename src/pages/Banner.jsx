import React, {useState, useEffect} from 'react'
import './banner.css';
import backgroundImage from '.././images/bg-transformer.jpg'
import titleImage from '.././images/transformer-title.png'

function Banner() {
    const [movies, setMovies] = useState([]);

        const fetchData = () =>{
            fetch('http://localhost:3000/data/movieData.json')///fetching restful api data and turning them into the "movies"
            .then(res=>res.json())
            .then(data => setMovies(data)) ///turning the empty array into the data from the json
            .catch(e=>console.log(e.message));
        };

        useEffect(() => {
            fetchData();
        },[]);






  return (
    <div className="banner">
        <div className="movie">
            <img src={backgroundImage} alt='Background Image' className="backgroundImage active"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 cold-md-12">
                        <div className="content active">
                            <img src={titleImage} alt="Movie Title" className="movie-title active"/>
                            <h4><span>Year</span>
                                <span><i>Age</i></span>
                                <span>Length</span>
                                <span>Category</span>  
                            </h4>
                            <p>
                                This movie is cool whatever
                                this means you know
                                what this means twin
                                lock me into
                            </p>
                            <div className="button">Button</div>
                        </div>

                    </div>
                    <div className="col-lg-6 cold-md-12">
                        <div className="date active">
                            <h2>On 15th August</h2>
                        </div>
                        <div className="trailer">
                            <a href="#" className="playButton">
                                <ion-icon name="play-outline"></ion-icon>
                            </a>
                            <p>Play Trailer</p>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    </div>
  );
}

export default Banner