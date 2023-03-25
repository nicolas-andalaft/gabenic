const input = document.querySelector(".main-input");
const inputContainer = document.querySelector(".input-container");
const messageContainer = document.querySelector(".message-container");
const finalContainer = document.querySelector(".final-container");

const rightCodes = ['amo', 'feliz', 'lado', 'completa', 'entende', 'divirto', 'feitos', 'perfeito'];
const messages = [
  'Eu te <strong>amo</strong>',
  'Sou mais <strong>feliz</strong> contigo',
  'Quero estar sempre ao<br> seu <strong>lado</strong>',
  'Você me <strong>completa</strong>',
  'A gente se <strong>entende</strong>',
  'Eu si <strong>divirto</strong> com você',
  'Fomos <strong>feitos</strong> um<br> pro outro',
  'Você é <strong>perfeito</strong>',
];

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    submitCode();
  }
});

function submitCode() {
  const value = input.value.trim().toLowerCase();

  if (value == '') return;

  const index = rightCodes.indexOf(value);
  if (index === -1) {
    inputContainer.classList.add("error");
    setTimeout(() => inputContainer.classList.remove("error"), 1000);
  }
  else {
    showMessage(index);
  }
  
  input.value = '';
}

function showMessage(index) {
  const el = document.createElement('li');
  el.innerHTML = messages[index];
  el.classList.add('type');
  messageContainer.insertBefore(el, messageContainer.firstChild);

  rightCodes.splice(index, 1);
  messages.splice(index, 1);

  if (messages.length === 0) {
    setTimeout(() => messageContainer.classList.add('fade'), 2000);
    setTimeout(() => showFinalMessage(0), 4000);
  }
}
function showFinalMessage(index) {
  finalContainer.children[index].classList.add('fade-in');

  if (index < 4) {
    setTimeout(() => showFinalMessage(++index), 2000);
  }
}