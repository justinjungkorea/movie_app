import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import InfiniteLoader from "react-infinite-loader";

class App extends Component {
  state = {
    num:1,
    movies: [],
    maximumPage:100
  };
 

  componentDidMount() {
    this._firstPage();
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
    let items = this.state.movies.slice();
    const newMovies = await this._callApi(num);
    items = items.concat(newMovies);
    this.setState({ 
      movies: items
    });
  };

  _callApi = (page) => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating&limit=50&page="+page)
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _loaditems = () => {
      this.state.num++;
      this._getMovies(this.state.num);
  };

  render() {
    console.log(this.state.movies.length);
    return (
      <div className={this.state.movies.length !== 0 ? "App" : "App--loading"}>
        {this.state.movies.length !== 0 ? this._renderMovies() : "Loading..."}
        <div>
          {this.state.num<3 ? <InfiniteLoader onVisited={() => this._loaditems()} /> : <p></p>}
        </div>
      </div>
    );
  }
}

export default App;
