import React from 'react'
import './moviecontent.css'
import titleImage from '.././images/spiderverse-title.png'
import Button from './Button'

function MovieContent() {
  return (
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
        <div className="button">
            <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name="Book" color="#ff3700" backgroundColor="#ffffff" />
            <Button icon={<ion-icon name="add-outline"></ion-icon>} name="My List" color="#ff3700" backgroundColor="#ffffff"/>

            

        </div>
    </div>
  )
}

export default MovieContent