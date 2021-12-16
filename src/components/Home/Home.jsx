import scifi from "../../data/scifi.json";
import { Container } from "react-bootstrap";

import Books from "./Books";
const Home = () => {
  return (
    <>
      <Container>
        <Books books={scifi} />
      </Container>
    </>
  );
};
export default Home;
