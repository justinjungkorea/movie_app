import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title: "Iron Man",
    poster: "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
  },
  {
    title: "Transformer",
    poster: "https://movie-phinf.pstatic.net/20111223_180/1324583623164LA0FV_JPEG/movie_image.jpg"
  },
  {
    title: "National Treasure",
    poster: "https://movie-phinf.pstatic.net/20111221_116/1324452697896DMgIP_JPEG/movie_image.jpg"
  },
  {
    title: "Ocean's eleven",
    poster: "https://movie-phinf.pstatic.net/20111222_295/1324531366643q7BRh_JPEG/movie_image.jpg"
  },
  {
    title: "Italian job",
    poster: "https://movie-phinf.pstatic.net/20111221_192/1324475568659ItkXm_JPEG/movie_image.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title = {movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
