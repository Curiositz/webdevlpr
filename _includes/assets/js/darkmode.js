let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const root = document.querySelector('html');

const enableDarkMode = () => {
  // 1. add the class darkmode to the body
  root.classList.add('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // 1. add the class darkmode to the body
  root.classList.remove('darkmode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', null);
};

if (darkMode == 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
  }
});