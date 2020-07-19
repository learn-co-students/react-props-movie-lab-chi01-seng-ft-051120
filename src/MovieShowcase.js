import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(item => {
      const title = item.title;
      const IMDBRating = item.IMDBRating;
      const genresArr = item.genres;
      const poster = item.poster;
      return <MovieCard title={title} IMDBRating={IMDBRating} genres={genresArr} poster={poster}/>
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
