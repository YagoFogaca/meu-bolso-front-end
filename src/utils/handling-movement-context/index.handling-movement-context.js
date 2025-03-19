export class HandlingMovementContext {
  static addMovementContext(movement, movements) {
    const data = [movement, ...movements];

    return this.filterMovementContext(data);
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
}
