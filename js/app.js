console.log('connected')

const form = document.getElementById('form');

const name = document.getElementById('name');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const nameErr = document.getElementById('nameErr');
const messageErr = document.getElementById('messageErr');

// Prevent submission of empty form in old browsers


form.addEventListener('submit', (event) => {
  if (name.value.length < 4) {
    nameErr.innerHTML = 'Name should be atleast 4 characters long.'
  }

  if (message.value.length < 20) {
    messageErr.innerHTML = 'Message should be atleast 20 characters long.'
  }
  event.preventDefault();
});

name.addEventListener('blur', (e) => {
  if (e.target.value.length > 3) {
    nameErr.classList.add('hide');
  } else {
    nameErr.classList.remove('hide');
  }
});

message.addEventListener('blur', (e) => {
  if (e.target.value.length > 19) {
    messageErr.classList.add('hide');
  } else {
    messageErr.classList.remove('hide');
  }
});

