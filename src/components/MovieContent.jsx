import React from 'react';
import './movieContent.css';
import Button from './Button';

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? 'active' : undefined}`}>
      <img className="movie-title" src={movie.titleImg} alt={movie.title} />
      <h4>
        <span>{movie.year}</span>
        <span>{movie.ageLimit}</span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ffffff"
          bgColor="#000dff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
          color="#ffffff"
          bgColor="#000dff"

        />
      </div>
    </div>
  );
}

export default MovieContent;
