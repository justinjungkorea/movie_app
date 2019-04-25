import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies(1);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (<Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          rating={movie.rating}
          summary={movie.summary}
        />);
    });
    return movies;
  };

  _getMovies = async (num) => {
    const movies = await this._callApi(num);
    this.setState({ 
      movies
    });
  };

  _callApi = (page) => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=50&page="+page)
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    const {movies} = this.state;
    return (
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : "Loading..."}
        </div>
    );
  }
}

export default App;
