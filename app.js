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

submit.addEventListener('click', (e) => {
  e.preventDefault();
  table.classList.add('show-table');
  let userData = {
    firstName: firstName.value,
    surname: surname.value,
    age: age.value,
    select: select.value,
    club: club.value,
  };

  let tableContent = ` <tr>
        <td>${userData.firstName}</td>
        <td>${userData.surname}</td>
        <td>${userData.age}</td>
        <td>${userData.select}</td>
        <td>${userData.club}</td>
        <td>
          <button class="delete">Delete</button>
        </td>
      </tr>

`;

  newTableRow.insertAdjacentHTML('beforeend', tableContent);
  console.log(userData);
});
