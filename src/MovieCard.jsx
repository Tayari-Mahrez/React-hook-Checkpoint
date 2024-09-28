import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt=""></img> 
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/10</p>
    </div>
  );
};

export default MovieCard;