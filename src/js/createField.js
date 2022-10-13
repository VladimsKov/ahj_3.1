import Clicker from './clicker';
// rewrited with classes
export default class Field {
  constructor() {
    const field = document.createElement('div');
    this.field = field;
    this.renderField();
    this.renderActiveItem();
    this.timerId = '';
    this.clicker = new Clicker();
    this.field.addEventListener('click', (event) => {
      this.clicker.clickHandler(event.target, this);
    });
  }

  renderField() {
    document.body.prepend(this.field);
    this.field.classList.add('field');
    for (let i = 1; i <= 16; i += 1) {
      const fieldItem = document.createElement('div');
      fieldItem.classList.add('field-item');
      this.field.append(fieldItem);
    }
  }

  renderActiveItem() {
    this.activeId = Math.floor(Math.random() * 16);
    this.field.children[this.activeId].classList.add('field-item_active');
  }
}
