import { Component } from "react";
import CommentList from "../CommentArea/CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.imdbId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjBlYzRjZmY1ZjAwMTU5MGJkYjUiLCJpYXQiOjE2Mzk3MzQzOTYsImV4cCI6MTY0MDk0Mzk5Nn0.2LDyPgzmzS1fcST5hPK9gVF_koxJuRYpiHpiu6sCM3Q",
            "Content-Type": "application/json",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
      alert("Fetching mistake!");
    }
  };
  render() {
    console.log(this.props);
    return <CommentList commentsToShow={this.state.comments} />;
  }
}

export default CommentArea;
