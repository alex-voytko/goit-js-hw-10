const themeRef = document.querySelector('.theme-switch__toggle');
const darkTheme = 'dark-theme';

saveUserActions();

function onToggleClick() {
  document.body.classList.toggle(darkTheme);
  darkThemeCheck();
}

function darkThemeCheck() {
  document.body.classList.contains(darkTheme)
    ? localStorage.setItem('theme', darkTheme)
    : localStorage.removeItem('theme');
}

function saveUserActions() {
  if (localStorage.theme) {
    document.body.classList.toggle(darkTheme);
    themeRef.setAttribute('checked', true);
  }
}

export default themeRef.addEventListener('change', onToggleClick);
