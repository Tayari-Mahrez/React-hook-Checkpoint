import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://image.url/inception.jpg',
      rating: 9,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: 'https://image.url/interstellar.jpg',
      rating: 8.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleAddMovie = () => {
    const newMovieData = {
      ...newMovie,
      rating: parseFloat(newMovie.rating),
    };

    const updatedMovies = [...movies, newMovieData];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    }); 
  };

  const handleFilter = (title, rating) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === '' || movie.rating >= parseFloat(rating))
      );
    });
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Movie App</h1>

      <Filter onFilter={handleFilter} />

      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Movie Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (out of 10)"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;