import { useState, useContext } from "react";
import { MovementContext } from "../../context/movement/index.context.movement.jsx";
import { Api } from "../../api/index.api.user.js";
import { FormateDate } from "../../utils/formate-date/index.formate-date.js";
import { HandlingMovementContext } from "../../utils/handling-movement-context/index.handling-movement-context.js";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { TextFeedback } from "../../components-style/text-feedback/index.text-feedback.js";
import { SpinnerComponents } from "../spinner/index.spinner.jsx";
import { BtnStyledLogin } from "../../components-style/btn-primary/index.btn-primary.styled.js";

export const FormUpdateMovement = ({ movement, handleClose }) => {
  const { movements, setMovements, setMovementsAmount } =
    useContext(MovementContext);

  const [loading, setLoading] = useState(false);
  const [validatedUpdate, setValidatedUpdate] = useState({
    state: false,
    mensage: "",
  });

  const updateMovement = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        id: movement.id,
        user_id: movement.user_id,
        date: FormateDate.execute(event.currentTarget.date.value),
        hour: event.currentTarget.hour.value,
        amount: parseFloat(event.currentTarget.amount.value),
        description: event.currentTarget.description.value,
        type: event.currentTarget.type.value,
      };

      setLoading(true);

      const hasChanged = Object.keys(movement).some(
        (key) => movement[key] !== formData[key]
      );

      if (!hasChanged) {
        setValidatedUpdate({
          state: true,
          mensage: "Nenhuma alteração detectada.",
        });
        setLoading(false);
        return;
      }

      await Api.updateMovement(movement.id, formData);

      if (
        FormateDate.formate(formData.date).slice(1) !==
        localStorage.getItem("date")
      ) {
        const handlingMovementContext =
          HandlingMovementContext.removeMovementContext(
            movements,
            movement.index
          );
        setMovements(handlingMovementContext.movements);
        setMovementsAmount(handlingMovementContext.amount);
      } else {
        const handlingMovementContext =
          HandlingMovementContext.updateMovimentContext(
            movements,
            movement.id,
            formData
          );
        setMovements(handlingMovementContext.movements);
        setMovementsAmount(handlingMovementContext.amount);
      }

      setLoading(false);
      handleClose();
    } catch (error) {
      setValidatedUpdate({
        state: true,
        mensage: "Ocorreu um erro ao atualizar a movimentação.",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={updateMovement}>
        {validatedUpdate.state ? (
          <TextFeedback>{validatedUpdate.mensage}</TextFeedback>
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
            defaultValue={movement.description}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name="date"
              required
              defaultValue={FormateDate.formateInput(movement.date)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="hour">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              name="hour"
              required
              defaultValue={movement.hour}
            />
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
            defaultValue={movement.amount}
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
            defaultChecked={movement.type === "ENTRY" ? true : false}
          />
          <Form.Check
            inline
            label="Gastos"
            name="type"
            id="expenses"
            type="radio"
            value={"EXIT"}
            defaultChecked={movement.type === "EXIT" ? true : false}
          />
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          {loading ? (
            <SpinnerComponents />
          ) : (
            <BtnStyledLogin variant="primary" type="submit">
              Atualizar
            </BtnStyledLogin>
          )}
        </Stack>
      </Form>
    </>
  );
};
