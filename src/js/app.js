// TODO: write code here
import Field from './createField';
import ActivePos from './activePos';

document.addEventListener('DOMContentLoaded', () => {
  const field = new Field(8);

  field.timerId = setInterval(() => {
    ActivePos.changePlace(field);
  }, 1000);
  setTimeout(() => clearInterval(field.timerId), 15000);
});
