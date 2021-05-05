// Fetch all the values of the inputs and store in individual variables

const form = document.getElementById('form');
const firstName = document.querySelector('input[name = "firstname"]');
const surname = document.querySelector('input[name = "surname"]');
const age = document.querySelector('input[name = "age"]');
const select = document.querySelector('select');
const club = document.querySelector('input[name = "club"]');
const submit = document.querySelector('#btn');
const table = document.querySelector('#table');
const newTableRow = document.querySelector('#table tbody');
// Add EventListener to the submit btn, prevent the default behaviour on submit.
submit.addEventListener('click', (e) => {
  e.preventDefault();
  // Made the table visible in the html
  table.classList.add('show-table');
  // fetched user input and inserted it into the HTML and then reset the form right after
  const user = getUserData(firstName, surname, age, select, club);
  let tableContent = ` <tr>
        <td>${user.firstName}</td>
        <td>${user.surname}</td>
        <td>${user.age}</td>
        <td>${user.select}</td>
        <td>${user.club}</td>
        <td>
          <button class="delete">Delete</button>
        </td>
      </tr>
`;
  newTableRow.insertAdjacentHTML('beforeend', tableContent);
  form.reset();
  // The logic for the delete button
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
      const toDelete = e.currentTarget.parentElement.parentElement;
      toDelete.remove();
    });
  });
});
// User object getting function
const getUserData = (firstName, surname, age, select, club) => {
  let userData = {
    firstName: firstName.value,
    surname: surname.value,
    age: age.value,
    select: select.value,
    club: club.value,
  };
  return userData;
};
