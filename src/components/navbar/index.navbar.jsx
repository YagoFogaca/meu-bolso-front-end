import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import {
  NavDropdownLink,
  NavLinkStyled,
} from "../../components-style/NavLink/index.navlink.styled";

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
                <NavLinkStyled className={"nav-link"} to={"/app"} end>
                  Home
                </NavLinkStyled>
                <NavDropdown
                  title="Configuração"
                  id={`offcanvasNavbarDropdown-md-${"md"}`}
                  align="end"
                >
                  <NavDropdownLink
                    className={"dropdown-item"}
                    to={"/user/personal_info"}
                  >
                    Dados Pessoais
                  </NavDropdownLink>
                  <NavDropdownLink
                    className={"dropdown-item"}
                    to={"/user/personal_info"}
                  >
                    Segurança
                  </NavDropdownLink>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Sair</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
