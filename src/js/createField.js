export default function createField() {
  const field = document.createElement('div');
  document.body.prepend(field);
  field.classList.add('field');
  for (let i = 1; i <= 16; i += 1) {
    const fieldItem = document.createElement('div');
    fieldItem.classList.add('field-item');
    field.append(fieldItem);
  }
  const activeId = Math.floor(Math.random() * 16);
  field.children[activeId].classList.add('field-item_active');
  return activeId;
}
