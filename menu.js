// Konstans nevesítés.
const menuCheckbox = document.getElementById('menu-checkbox');

//Ha a menuCheckBox állapota megváltozik (be/ki pipálódik), történjenek meg a következők.
menuCheckbox.addEventListener('change', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (this.checked) {
        dropdownMenu.style.opacity = 1;
        dropdownMenu.style.translate = "0";
        dropdownMenu.style.visibility = "visible";
    } else {
        dropdownMenu.style.opacity = 0;
        dropdownMenu.style.translate = "-100%";
        dropdownMenu.style.visibility = "hidden";
    }
});