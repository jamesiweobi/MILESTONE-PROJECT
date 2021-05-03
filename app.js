// Fetch all the values of the inputs and store in individual variables

const firstName = document.querySelector('#fname').nodeValue;
const submit = document.querySelector('.btn');

submit.addEventListener('onsubmit', function (evt) {
  evt.preventDefault();
  window.history.back();
});
submit.addEventListener('click', (e) => {
  e.defaultPrevented();
  console.log(firstName);
});
