const toggleExampleButton = document.getElementById('toggle-alter');
const myElement = document.querySelector("body");

toggleExampleButton.addEventListener('click', () => {
  myElement.classList.toggle('alter');
});