const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarAvatar = document.querySelector('.navbar-avatar');
const avatarMenu = document.querySelector('.avatar-menu');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if(!navbarCollapse.contains(event.target)) {
    navbarCollapse.classList.remove('show'); 
  }
});

navbarAvatar.addEventListener('click', () => {
  avatarMenu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if(!avatarMenu.contains(event.target)) {
    avatarMenu.classList.remove('show');
  }
});

const darkModeSwitch = document.querySelector('#darkModeSwitch');

darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode'); 
});