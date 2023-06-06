import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
  return (
    <Navbar variant="light" bg="primary">
      <Container>
        <Navbar.Brand className="text-white" href="/">
          TV Show
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
