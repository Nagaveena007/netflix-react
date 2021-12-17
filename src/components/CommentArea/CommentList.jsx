import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList1 extends Component {
  render() {
    return (
      <div>
        {/*         <Button onClick={this.onClickButton}>Click Me</Button>
         */}{" "}
        <ListGroup
          className="mb-3"
          style={{ border: "1px solid black", borderRadius: "0.6rem" }}
        >
          {this.props.commentsToShow.map((c, i) => (
            <ListGroup.Item key={i}>{c.comment}</ListGroup.Item>
          ))}
        </ListGroup>
        ;
      </div>
    );
  }
}

export default CommentList1;
