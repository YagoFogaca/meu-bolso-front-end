import { Form, Row, Col } from "react-bootstrap";

export const FormCreateMovement = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" placeholder="05/03/2025" />
          </Form.Group>

          <Form.Group as={Col} controlId="hour">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="date" placeholder="Hora" />
          </Form.Group>
        </Row>

        <Form.Group controlId="amount">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" placeholder="R$0,00" />
        </Form.Group>

        <Form.Group className="mb-3" id="type_movement">
          <Form.Label style={{ display: "block" }}>
            Tipo de movimentação
          </Form.Label>
          <Form.Check
            inline
            label="Receita"
            name="teste"
            id="revenue"
            type="radio"
            value={"revenue"}
          />
          <Form.Check
            inline
            label="Gastos"
            name="teste"
            id="expenses"
            type="radio"
            value={"expenses"}
          />
        </Form.Group>
      </Form>
    </>
  );
};
