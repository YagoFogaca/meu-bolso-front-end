export class GenerateDate {
  static execute() {
    const date = new Date();
    return `${date.getMonth() + 1}-${date.getFullYear()}`;
  }
}
