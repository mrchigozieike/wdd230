const input = document.getElementById('favchap');
const button = document.querySelector('button[type="submit"]');
const list = document.getElementById('list');

button.addEventListener('click', function() {
  // make sure the input is not blank
  if (input.value.trim() !== '') {
    // create an li element
    const li = document.createElement('li');

    // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // populate the li element with the input
    li.textContent = input.value;

    // append the li element with the delete button
    li.appendChild(deleteButton);

    // append the list element with the li element
    list.appendChild(li);

    // add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
      // remove the li element
      list.removeChild(li);
    });

    // send the focus to the input element
    input.focus();

    // change the input value to nothing
    input.value = '';
  }
});
