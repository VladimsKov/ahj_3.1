// TODO: write code here
import createField from './createField';
import intervalActive from './intervalActive';

document.addEventListener('DOMContentLoaded', () => {
  let activeId = createField();
  const timerId = setInterval(() => {
    activeId = intervalActive(activeId);
  }, 500);
  setTimeout(() => clearInterval(timerId), 5000);
});
