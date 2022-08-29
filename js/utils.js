export function notNumber(value) {
  return isNaN(value) || value == '';
}

export function imcCalculateResult(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function displayResultMessage(result) {
  const modalMessage = document.querySelector('.title span');
  modalMessage.innerHTML = `Seu IMC é de ${result}`;
}
