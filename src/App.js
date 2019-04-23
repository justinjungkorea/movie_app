import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    
  };

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        movies: [
          {
            title: "Iron Man",
            poster:
              "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
          },
          {
            title: "Transformer",
            poster:
              "https://movie-phinf.pstatic.net/20111223_180/1324583623164LA0FV_JPEG/movie_image.jpg"
          },
          {
            title: "National Treasure",
            poster:
              "https://movie-phinf.pstatic.net/20111221_116/1324452697896DMgIP_JPEG/movie_image.jpg"
          },
          {
            title: "Ocean's eleven",
            poster:
              "https://movie-phinf.pstatic.net/20111222_295/1324531366643q7BRh_JPEG/movie_image.jpg"
          },
          {
            title: "Italian job",
            poster:
              "https://movie-phinf.pstatic.net/20111221_192/1324475568659ItkXm_JPEG/movie_image.jpg"
          },
          {
            title: "Tranporter",
            poster:
              "https://movie-phinf.pstatic.net/20111222_261/1324487946607k7Dwz_JPEG/movie_image.jpg"
          }
        ]
      });
    },5000)
  }

  _rederMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie title={movie.title} poster={movie.poster} key={index} />
      );
    });

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._rederMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
