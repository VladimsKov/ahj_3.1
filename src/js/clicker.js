import ActivePos from './activePos';

export default class Clicker {
  constructor() {
    this.loss = 0;
    this.win = 0;
  }

  clickHandler(targetItem, newField) {
    const activeField = newField;
    if (targetItem.classList.contains('field-item_active')) {
      this.win += 1;
      // console.log(`кол-во баллов выигрыша: ${this.win}`);
      clearInterval(activeField.timerId);
      ActivePos.changePlace(activeField);
      activeField.timerId = setInterval(() => {
        ActivePos.changePlace(activeField);
      }, 1000);
    } else {
      this.loss += 1;
      // console.log(`номер неудачной попытки: ${this.loss}`);
    }
    if (this.loss === 5) {
      clearInterval(activeField.timerId);
      // console.log('the game is lost');
    }
  }
}
