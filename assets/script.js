// toggle for the navbar
const menuIcon = document.querySelector('.menu-icon');
const navItems = document.querySelector('.nav-items');
const ctn = document.querySelector('header .container');
menuIcon.addEventListener('click', () => {
  if (navItems.classList.contains('show')) {
      navItems.classList.remove('show');
      navItems.classList.add('hide');
      ctn.style.height = "150px"; 
  } else {
    navItems.classList.remove('hide');
    navItems.classList.add('show');
    ctn.style.height = "360px"; 
  }

});

// update the container's height back to normal and displays content for large screens
function updateCtn() {
  const ctn = document.querySelector('header .container');
  const navItems = document.querySelector('.nav-items');
  if (window.matchMedia("(max-width: 768px)").matches) { // for small screen sizes
    ctn.style.height = '150px';
    navItems.classList.remove('show');
    navItems.classList.add('hide');

  } else {  // for large screen sizes
    ctn.style.height = '';
    navItems.classList.remove('hide');
    navItems.classList.add('show');
  }
}

// initially when the page loads
updateCtn();

window.addEventListener('resize', updateCtn);