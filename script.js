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
    createSpan.innerText = i;
    createInput.type = 'radio';
    createInput.name = 'rate';
    createInput.value = i;
    rateButtons.appendChild(createSpan);
    rateButtons.appendChild(createInput);
  }
}

createRateButtons();

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('estou funcionando');
});

function disableSubmitButton() {
  if (agreementCheck.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

disableSubmitButton();
agreementCheck.addEventListener('click', disableSubmitButton);
