const inputEmail = document.querySelector('[name=email]');
const inputPassword = document.querySelector('[name=password]');
const buttonLogin = document.querySelector('#confirmLogin');

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
