import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

loadFormState();

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormState() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formData = JSON.parse(savedState);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}
