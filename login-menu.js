// Konstansok nevesítése.
const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.querySelector('.login-dropdown-menu');

// dropdownButton gomb megnyomásakor a következő beállítások érvényesülnek.
dropdownButton.addEventListener('click', () => {
  if (dropdownMenu.style.opacity === "1") {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.transform = "translate(100%)";
    setTimeout(() => {
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.display = "none";
    }, 200); // Vár 200 ms-ot a DISPLAY és VISIBILITY tulajdonság módosítása előtt.

  } else {
    dropdownMenu.style.visibility = "visible";
    dropdownMenu.style.display = "block";
    setTimeout(() =>{
      dropdownMenu.style.opacity = "1";
      dropdownMenu.style.transform = "translate(0)";
    }, 10); // Vár 30 ms-ot az OPACITY és TRANSFORM tulajdonság módosítása előtt.
  }
});