import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { BsFillNodeMinusFill } from "react-icons/bs";

class SingleMovie extends Component {
  state = {
    selected: null,
  };

  render() {
    return (
      <Row className="mx-1 my-4 justify-content-center">
        {" "}
        {this.props.movies.map(
          (movie, i) =>
            i < 4 && (
              <Col key={i} xs="12" sm="6" md="4" lg="3" className="mb-3">
                <img
                  src={movie.Poster}
                  className="w-100 img-fluid rounded images"
                  alt=""
                  onClick={() => {
                    if (this.state.selected !== movie.imdbID) {
                      this.setState({
                        selected: movie.imdbID,
                      });
                    } else {
                      this.setState({
                        selected: null,
                      });
                    }
                    console.log(this.state);
                  }}
                />
              </Col>
            )
        )}
        <Modal
          show={this.state.selected !== null}
          onHide={() => this.setState({ selected: null })}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentArea imdbId={this.state.selected} />
          </Modal.Body>
        </Modal>
      </Row>
    );
  }
}

export default SingleMovie;

/* 
import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleMovie extends Component {
  state = {
    selectedMovie: false,
  };


  render() {



    return (
      <>
        <Row className="mx-1 my-4 justify-content-center">
          {" "}
          {this.props.movies.map(
            (movie, i) =>
              i <Row 4 && (
                <Col key={i} xs="12" sm="6" md="4" lg="3" className="mb-3">
                  <img
                    src={movie.Poster}
                    className="w-100 img-fluid rounded images"
                    alt=""
                    onClick={() =>
              this.setState({
                selectedMovie: !this.state.selectedMovie,
              })/>
                </Col>
                </Row>
             {this.state.selectedMovie && (
          <CommentArea movies={this.props.movies.imdbId} />
        )} )
          )}
        </>


        /* <Col md={3} className="mb-2">
          <Card
            onClick={() =>
              this.setState({
                selectedMovie: !this.state.selectedMovie,
              })
            }
          >
            <Card.Img
              variant="top"
              style={{ height: "40vh", objectFit: "cover" }}
              src={this.props.movies.Poster}
            />
          </Card>
        </Col>
        {this.state.selectedMovie && (
          <CommentArea movies={this.props.movies.imdbId} />
        )}
      </>
    ); */
/* }
export default SingleMovie;
 */
