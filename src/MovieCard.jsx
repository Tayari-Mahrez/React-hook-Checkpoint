import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();  
  const movie = movies.find((movie) => movie.id === parseInt(id)); 

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/10</p>
      <br />
      <Link to="/">Back to Home</Link>  
    </div>
  );
};

export default MovieDetails;