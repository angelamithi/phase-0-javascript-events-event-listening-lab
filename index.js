function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert); // Move this line inside the function
}

// Call the function to set up the event listener
addingEventListener();
