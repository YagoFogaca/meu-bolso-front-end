import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BtnStyled } from "../../components-style/btn-primary/index.btn-primary.styled";
import { FormCreateMovement } from "../form-create-movement/index.form-create-movement";

export const ModalCreate = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <BtnStyled variant="primary" onClick={handleShow}>
        <i className="bi bi-plus"></i> Adicionar
      </BtnStyled>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar movimentação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCreateMovement />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <BtnStyled variant="primary" onClick={handleClose}>
            Adicionar
          </BtnStyled>
        </Modal.Footer>
      </Modal>
    </>
  );
};
