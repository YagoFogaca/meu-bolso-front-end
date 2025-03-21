import { Modal } from "react-bootstrap";
import { FormUpdateMovement } from "../form-update-movement/index.form-update-movement";

export const ModalUpdateMovement = ({ show, handleClose, movement }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Atualizar a movimentação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdateMovement handleClose={handleClose} movement={movement} />
        </Modal.Body>
      </Modal>
    </>
  );
};
