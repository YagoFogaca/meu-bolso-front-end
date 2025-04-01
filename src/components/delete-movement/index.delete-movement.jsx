import { useContext } from "react";
import { Api } from "../../api/index.api.user.js";
import { HandlingMovementContext } from "../../utils/handling-movement-context/index.handling-movement-context.js";
import { MovementContext } from "../../context/movement/index.context.movement.jsx";

export const DeleteMovement = ({ movement_id, index }) => {
  const { movements, setMovements, setMovementsAmount } =
    useContext(MovementContext);

  const deleteMovement = async () => {
    try {
      await Api.deleteMovement(movement_id);
      setMovements(
        HandlingMovementContext.removeMovementContext(movements, index)
          .movements
      );
      setMovementsAmount(
        HandlingMovementContext.removeMovementContext(movements, index).amount
      );
    } catch (error) {}
  };

  return (
    <>
      <button onClick={deleteMovement}>
        <i className="bi bi-trash3-fill"></i>
      </button>
    </>
  );
};
