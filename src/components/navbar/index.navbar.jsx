import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const NavbarComponents = () => {
  return (
    <>
      <Navbar
        key={"md"}
        expand={"md"}
        className="bg-body-tertiary mb-3 navbar"
        data-bs-theme="dark"
        bg="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="/logo_banner.png"
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-md-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-md-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-md-${"md"}`}
            placement="end"
            className=""
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-md-${"md"}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown
                  title="Conta"
                  id={`offcanvasNavbarDropdown-md-${"md"}`}
                  align="end"
                >
                  {/* <NavDropdown.Item href="#action3">Conta</NavDropdown.Item> */}
                  <NavDropdown.Item href="#action4">
                    Configuração
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Sair</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
