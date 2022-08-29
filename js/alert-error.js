export const alertError = {
  element: document.querySelector('.alert-error'),

  openError() {
    alertError.element.classList.add('open');
  },
  closeError() {
    alertError.element.classList.remove('open');
  },
};
