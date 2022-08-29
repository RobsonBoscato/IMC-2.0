export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
  openError() {
    Modal.error.classList.add('open');
  },
  closeError() {
    Modal.error.classList.remove('open');
  },
};

Modal.buttonClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeyEscape);
function handleKeyEscape(event) {
  if (event.key == 'Escape') {
    Modal.close();
  }
}
