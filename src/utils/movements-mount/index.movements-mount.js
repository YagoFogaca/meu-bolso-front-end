export const MovementsAmount = (movement) => {
  const movementAmount = {
    entry: 0,
    exit: 0,
  };
  movement.map((movement) => {
    if (movement.type === "ENTRY") {
      movementAmount.entry += movement.amount;
    } else {
      movementAmount.exit += movement.amount;
    }
  });

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return {
    entry: movementAmount.entry.toLocaleString("PT", options),
    exit: movementAmount.exit.toLocaleString("PT", options),
  };
};
