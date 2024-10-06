import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;