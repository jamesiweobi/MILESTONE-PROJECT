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
  newTableRow.insertAdjacentHTML('beforeend', prepUser());
  console.log(myJson);
});

const getUserData = (firstName, surname, age, select, club) => {
  const userData = {
    firstName: firstName.value,
    surname: surname.value,
    age: age.value,
    select: select.value,
    club: club.value,
  };
  return userData;
};

const myJson = [];
myJson.push(userData);
const prepUser = () => {
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
  return tableContent;
};
