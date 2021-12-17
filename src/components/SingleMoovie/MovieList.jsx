import { Component } from "react";
import SingleMovie from "./SingleMovie";

const API_KEY = "2a636d89";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const fetchMovieByTitle = async (title) => {
  try {
    // search movie
    const res = await fetch(`${BASE_URL}s=${title}`);
    const data = await res.json();
    // return search result as array
    return data.Search;
  } catch (error) {
    console.log(error);
  }
};
const moviesToFetch = ["Batman", "Spiderman", "Hulk", "Iron Man", "Pirate"];

class MovieList extends Component {
  state = {
    movies: [],
  };
  fetchAllMovies = async () => {
    try {
      const movies = await Promise.all(moviesToFetch.map(fetchMovieByTitle));
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchAllMovies();
  };
  render() {
    return (
      <>
        {this.state.movies.map((arrayOfMovies) => (
          <SingleMovie movies={arrayOfMovies} />
        ))}
      </>
    );
  }
}

export default MovieList;
