import Cookies from "js-cookie";
import { useState, useContext } from "react";
import { MovementContext } from "../../context/movement/index.context.movement.jsx";
import { Api } from "../../api/index.api.user.js";
import { FormateDate } from "../../utils/formate-date/index.formate-date.js";
import { HandlingMovementContext } from "../../utils/handling-movement-context/index.handling-movement-context.js";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { TextFeedback } from "../../components-style/text-feedback/index.text-feedback.js";
import { SpinnerComponents } from "../spinner/index.spinner.jsx";
import { BtnStyledLogin } from "../../components-style/btn-primary/index.btn-primary.styled.js";

export const FormCreateMovement = ({ handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [validatedCreate, setValidatedCreate] = useState(false);

  const { movements, movementsAmount, setMovements, setMovementsAmount } =
    useContext(MovementContext);

  const createMoviment = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (validatedCreate) {
      setValidatedCreate(false);
    }

    try {
      const createdMovement = await Api.createMoviment({
        user_id: Cookies.get("user_id"),
        date: FormateDate.execute(event.currentTarget.date.value),
        hour: event.currentTarget.hour.value,
        amount: parseFloat(event.currentTarget.amount.value),
        description: event.currentTarget.description.value,
        type: event.currentTarget.type.value,
      });

      if (
        localStorage.getItem("date") ===
        FormateDate.formate(createdMovement.date).slice(1)
      ) {
        const handlingMovementContext =
          HandlingMovementContext.addMovementContext(
            createdMovement,
            movements
          );
        setMovements(handlingMovementContext.movements);
        setMovementsAmount(handlingMovementContext.amount);
      }

      handleClose();
    } catch (error) {
      setValidatedCreate(true);
    }
    setLoading(false);
  };
  return (
    <>
      <Form onSubmit={createMoviment}>
        {validatedCreate ? (
          <TextFeedback>
            Ocorreu um erro ao criar uma movimentação.
          </TextFeedback>
        ) : (
          <></>
        )}
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            placeholder="escreva a descrição"
            name="description"
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Data</Form.Label>
            <Form.Control type="date" name="date" required />
          </Form.Group>

          <Form.Group as={Col} controlId="hour">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" placeholder="Hora" name="hour" required />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="amount">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            placeholder="R$0,00"
            name="amount"
            step=".01"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" id="type_movement">
          <Form.Label style={{ display: "block" }}>
            Tipo de movimentação
          </Form.Label>
          <Form.Check
            inline
            label="Receita"
            name="type"
            id="revenue"
            type="radio"
            value={"ENTRY"}
            defaultChecked
          />
          <Form.Check
            inline
            label="Gastos"
            name="type"
            id="expenses"
            type="radio"
            value={"EXIT"}
          />
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          {loading ? (
            <SpinnerComponents />
          ) : (
            <BtnStyledLogin variant="primary" type="submit">
              Adicionar
            </BtnStyledLogin>
          )}
        </Stack>
      </Form>
    </>
  );
};
