export default function intervalActive(lastId) {
  const newId = Math.floor(Math.random() * 15);
  const field = document.querySelector('.field');

  if (newId !== lastId) {
    field.children[lastId].classList.toggle('field-item_active');
    field.children[newId].classList.toggle('field-item_active');
    return newId;
  }
  field.children[lastId].classList.toggle('field-item_active');
  field.children[newId + 1].classList.toggle('field-item_active');
  return newId + 1;
}
