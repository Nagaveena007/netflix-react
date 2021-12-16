import { Component } from "react";
import { Container } from "react-bootstrap";

class Home extends Component {
  state = {};
  fetchCategories = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2Mzg5NzQwMzgsImV4cCI6MTY0MDE4MzYzOH0.US5LnaBA-naCQfgPfcQYfFn8yEoEbO9Y468H2YPq7kw",
        },
      }
    );

    const categories = await response.json();
    //console.log(categories);
    return categories;
  };
  getMoviesByCategory = async (category) => {
    let slideScrollLeft;
    let slideScrollRight;
    let raw = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/" + category,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2Mzg5NzQwMzgsImV4cCI6MTY0MDE4MzYzOH0.US5LnaBA-naCQfgPfcQYfFn8yEoEbO9Y468H2YPq7kw",
          "Content-Type": "application/json",
        },
      }
    );
    let movies = await raw.json();
    // console.log(movies);
    /*     displayProducts(movies, category);
     */
  };
  render() {
    return (
      <>
        <Container>Home</Container>
      </>
    );
  }
}
export default Home;
