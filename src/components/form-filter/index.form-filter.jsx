import { Form, Row, Col } from "react-bootstrap";
import { BtnStyled } from "../../components-style/btn-primary/index.btn-primary.styled.js";

export const FormFilter = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="month">
            <Form.Label>Mês</Form.Label>
            {/* Colocar defaultValue DPS */}
            <Form.Select defaultValue="Atual">
              <option>Janeiro</option>
              <option>Fevereiro</option>
              <option>Março</option>
              <option>Abrilt</option>
              <option>Maio</option>
              <option>Junho</option>
              <option>Julho</option>
              <option>Agosto</option>
              <option>Setembro</option>
              <option>Outubro</option>
              <option>Novembro</option>
              <option>Dezembro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="year">
            <Form.Label>Ano</Form.Label>
            {/* Colocar defaultValue DPS */}
            <Form.Select defaultValue="Atual">
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="type_movement">
          <Form.Label style={{ display: "block" }}>
            Tipo de movimentação
          </Form.Label>
          <Form.Check
            inline
            label="Todos"
            name="teste"
            id="all"
            type="radio"
            value={"all"}
            defaultChecked
          />
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

        <BtnStyled variant="primary" type="submit">
          Aplicar
        </BtnStyled>
      </Form>
    </>
  );
};
