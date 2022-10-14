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
    this.renderInfoFields();
    this.field.addEventListener('click', (event) => {
      this.clicker.clickHandler(event.target, this);
      this.infoCounts();
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

  renderInfoFields() {
    this.infoFields = document.createElement('div');
    this.infoFields.classList.add('info-block');
    this.infoFields.insertAdjacentHTML('afterbegin',
      `<p>Кол-во баллов: <span>${0}</span></p>
    <p>Кол-во неудачных попыток: <span>${0}</span></p>`);
    this.field.after(this.infoFields);
  }

  infoCounts() {
    this.infoFields.children[0].lastElementChild.innerText = this.clicker.win;
    this.infoFields.children[1].lastElementChild.innerText = this.clicker.loss;
    if (this.clicker.loss === 5) {
      this.infoFields.insertAdjacentHTML(
        'beforeend', 'Игра проиграна',
      );
    }
  }
}
