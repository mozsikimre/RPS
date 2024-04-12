var color; // Color változó inicializálása.

//A különböző témák beállítása és a nem használ témák eltűntetése.
function setTheme(theme) {
    const root = document.documentElement;
    switch (theme) {
      case 'default':
        root.classList.remove('theme-red', 'theme-green', 'theme-yellow', 'theme-black', 'theme-white');
        color = "blue";
        changeTheme();
        break;
      case 'red':
        root.classList.remove('theme-green', 'theme-yellow', 'theme-black', 'theme-blue', 'theme-white');
        root.classList.add('theme-red');
        color = "red";
        changeTheme();
        break;
      case 'green':
        root.classList.remove('theme-red', 'theme-yellow', 'theme-black', 'theme-blue', 'theme-white');
        root.classList.add('theme-green');
        color = "green";
        changeTheme();
        break;
      case 'yellow':
        root.classList.remove('theme-red', 'theme-green', 'theme-black', 'theme-blue', 'theme-white');
        root.classList.add('theme-yellow');
        color = "yellow";
        changeTheme();
        break;
      case 'black':
        root.classList.remove('theme-red', 'theme-green', 'theme-yellow', 'theme-blue', 'theme-white');
        root.classList.add('theme-black');
        color = "black";
        quoteColor();
        changeTheme();
        break;
      case 'white':
        root.classList.remove('theme-red', 'theme-green', 'theme-yellow', 'theme-blue', 'theme-black');
        root.classList.add('theme-white');
        color = "white";
        break;
    }
    quoteColor();
  }