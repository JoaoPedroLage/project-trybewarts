const inputEmail = document.querySelector('[name=email]');
const inputPassword = document.querySelector('[name=password]');
const buttonLogin = document.querySelector('#confirmLogin');
const rateButtons = document.querySelector('#third');
const agreementCheck = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

function createRateButtons() {
  for (let i = 1; i <= 10; i += 1) {
    const createInput = document.createElement('input');
    const createSpan = document.createElement('span');
    createInput.type = 'radio';
    createSpan.innerText = i;
    createInput.name = 'rate';
    createInput.value = i;
    rateButtons.appendChild(createSpan);
    rateButtons.appendChild(createInput);
  }
}

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function disableSubmitButton() {
  if (agreementCheck.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

window.onload = () => {
  createRateButtons();
  submitButton.disabled = true;
  agreementCheck.addEventListener('click', disableSubmitButton);
};
