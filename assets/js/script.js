const toggleBtn = document.querySelector('.navbar__toggle-dropdown');
const toggleBtnIcon = document.querySelector('.navbar__toggle-dropdown i');
const dropdownMenu = document.querySelector('.navbar__dropdown');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-sharp fa-solid fa-xmark'
    : 'fa-sharp fa-solid fa-bars'
}