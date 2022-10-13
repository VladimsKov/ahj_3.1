export default class ActivePos {
  static changePlace(newField) {
    const activeField = newField;
    const newId = Math.floor(Math.random() * 15);
    const lastId = activeField.activeId;
    if (newId !== lastId) {
      activeField.field.children[lastId].classList.toggle('field-item_active');
      activeField.field.children[newId].classList.toggle('field-item_active');
      activeField.activeId = newId;
      return;
    }
    activeField.field.children[lastId].classList.toggle('field-item_active');
    activeField.field.children[newId + 1].classList.toggle('field-item_active');
    activeField.activeId = newId + 1;
  }
}
