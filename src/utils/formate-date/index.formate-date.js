export class FormateDate {
  static execute(date) {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  }

  static formate(date) {
    const [_, month, year] = date.split("-");
    return `${month}-${year}`;
  }

  static formateInput(date) {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
  }
}
