const hamburgerIcon = document.getElementById('icon-hamburger');
const closeIcon = document.getElementById('icon-close');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerArea = document.querySelector('.hamburger-area');

//When menu is closed
hamburgerIcon.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('hidden')) {
    closeIcon.classList.remove('hidden');
    mobileMenu.classList.remove('hidden');
    hamburgerArea.classList.add('hidden');
  } else {
    closeIcon.classList.add('hidden');
    mobileMenu.classList.add('hidden');
  }
});

//When menu is opened
closeIcon.addEventListener('click', (e) => {
  mobileMenu.classList.add('hidden');
  closeIcon.classList.add('hidden');
  hamburgerArea.classList.remove('hidden');
});