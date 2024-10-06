import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieCard';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://image.url/inception.jpg',
      rating: 9,
    },
    {
      id: 2,
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

  // Add movie
  const handleAddMovie = () => {
    const newMovieData = {
      ...newMovie,
      id: movies.length + 1,  
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
    <Router>
      <div>
        <h1>Movie App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
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
            }
          />

          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;