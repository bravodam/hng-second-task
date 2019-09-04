console.log('connected')

const form = document.getElementById('form')

const nameField = document.getElementById('name')
const emailField = document.getElementById('email')
const titleField = document.getElementById('title')
const messageField = document.getElementById('message')

// Prevent submission of empty form in old browsers

const validate = (name, email, title, message, e) => {
  console.log('hi');

  if (name.value === '' || email.value === '' || title.value === '' || message.value === '') {
    e.preventDefault();
    return false;
  } else {
    return true;
  }
}


form.addEventListener('submit', (e) => {
  validate(nameField, emailField, titleField, messageField, e)
});
