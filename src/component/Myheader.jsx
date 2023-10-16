import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar href="/" className="fw-bold display-4">
            Pokedex
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
