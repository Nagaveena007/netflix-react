import { Modal } from "react-bootstrap";

const SingleComment = (props) => (
  <>
    {" "}
    <Modal.Header closeButton>
      <Modal.Title> {props.comment.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p> {props.comment.comment}</p>
    </Modal.Body>
  </>
);

export default SingleComment;
