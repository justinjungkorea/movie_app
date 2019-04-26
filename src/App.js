import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  state = {
    num:1,
    movies: [],
  };
 

  componentDidMount() {
    this._getMovies(1);
  }

  _renderMovies = () => {
    const items = this.state.movies.map(movie => {
      return (<Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          rating={movie.rating}
          summary={movie.summary}
        />);
    });
    return items;
  };

  _firstPage = async () => {
    const firstMovies = await this._callApi(1);
    this.setState({
      movies: firstMovies
    });
  }

  _getMovies = async (num) => {
    const newMovies = await this._callApi(num);
    this.setState({ 
      movies: this.state.movies.concat(newMovies)
    });
  };

  _callApi = (page) => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=50&page="+page)
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _loaditems = () => {

  };

  render() {
    return (
      <div className={this.state.movies.length !== 0 ? "App" : "App--loading"}>
        {this.state.movies.length !== 0 ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
