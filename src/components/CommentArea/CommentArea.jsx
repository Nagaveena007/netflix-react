import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
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
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.movie.comments.asin}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        ;
      </>
    );
  }
}

export default CommentArea;
