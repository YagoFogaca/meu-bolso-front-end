export class FormateDate {
  static execute(date) {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  }
}
