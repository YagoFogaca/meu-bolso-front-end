export class HandlingMovementContext {
  static addMovementContext(movement, movements) {
    const data = [movement, ...movements];

    return {
      movements: this.filterMovementContext(data),
      amount: this.addMovementContextAmount(data),
    };
  }

  static filterMovementContext(movements) {
    return movements.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
  }

  static addMovementContextAmount(movements) {
    const movementAmount = {
      entry: 0,
      exit: 0,
    };

    movements.map((movement) => {
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
  }

  static removeMovementContext(movements, index) {
    const data = movements.filter((_, i) => i !== index);
    return {
      movements: data,
      amount: this.addMovementContextAmount(data),
    };
  }
}
