import React from 'react'
import './movietrailerbutton.css'

function MovieTrailerButton() {
  return (
    <div className="trailer active d-flex align-items-center justify-content-center">
        <a href="#" className="playButton">
            <ion-icon name="play-circle-outline"></ion-icon>
        </a>
            <p>Play Trailer</p>
    </div>
  )
}

export default MovieTrailerButton