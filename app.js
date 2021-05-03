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

const getData = (firstName, surname, age, select, club) => {
  const newPerson = {
    firstName: firstName.value,
    surname: surname.value,
    age: age.value,
    select: select.value,
    club: club.value,
  };
  return newPerson;
};
const data = getData(firstName, surname, age, select, club);
const tableContent = `
   <tr>
        <td>${data.firstName}</td>
        <td>${data.surname}</td>
        <td>${data.age}</td>
        <td>${data.select}</td>
        <td>${data.club}</td>
        <td>
          <input class="btn-close"><i class="fas fa-times close"></i></input>
        </td>
      </tr>

`;
submit.addEventListener('click', (e) => {
  e.preventDefault();
  table.classList.add('show-table');

  console.log(tableContent);
  // newTableRow.

  console.log(data);
});
