import 'materialize-css/dist/js/materialize';
/* global M */
const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elements);
  });
};

export default {
  init,
};
