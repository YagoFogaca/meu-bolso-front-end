import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FormFilter } from "../../components/form-filter/index.form-filter.jsx";
import { BtnStyled } from "../../components-style/btn-primary/index.btn-primary.styled.js";

export const OffcanvasComponents = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BtnStyled variant="primary" onClick={handleShow}>
        <i className="bi bi-funnel-fill"></i>Filtros
      </BtnStyled>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormFilter />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
