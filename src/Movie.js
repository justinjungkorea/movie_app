import React from "react";
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings'
import ReadMoreReact from 'read-more-react'
import "./Movie.css";

function Movie({title, poster, genres, summary, rating}){
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Rating">
          <StarRatings
            rating={rating / 2}
            starRatedColor="#FFBA02"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Summary">
          <ReadMoreReact text={summary} min={80} ideal={100} />
        </div>
      </div>
    </div>
  );
}

function MoviePoster({poster, alt}){
  return <img src={poster} title={alt} className="Movie__Poster" alt={alt} />;
}

function MovieGenre({genre}){
  return <span className="Movie__Genre">{genre} </span>
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;