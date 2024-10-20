// toggle for the navbar
const menuIcon = document.querySelector('.menu-icon');
const navItems = document.querySelector('.nav-items');
const ctn = document.querySelector('.container');
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
  const ctn = document.querySelector('.container');
  const navItems = document.querySelector('.nav-items');
  if (window.matchMedia("(min-width: 768px)").matches) {
    ctn.style.height = 'auto';
    navItems.classList.remove('hide');
    navItems.classList.add('show');

  }
}

// initially when the page loads
updateCtn();

window.addEventListener('resize', updateCtn);