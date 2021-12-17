import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleMovie extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={() => {
              this.setState({ selected: !this.state.selected });
            }}
            variant="top"
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
          </Card.Body>
        </Card>

        {this.state.selected && <CommentArea asin={this.props.movie.asin} />}
      </>
    );
  }
}

export default SingleMovie;
