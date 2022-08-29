import { Modal } from './modal.js';
import { alertError } from './alert-error.js';
import {
  imcCalculateResult,
  notNumber,
  displayResultMessage,
} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
inputWeight.addEventListener('input', handleErrorMessage);
inputHeight.addEventListener('input', handleErrorMessage);

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    alertError.openError();
    return;
  }

  alertError.closeError();

  Modal.open();

  const result = imcCalculateResult(weight, height);
  displayResultMessage(result);
};

function handleErrorMessage() {
  alertError.closeError();
}
