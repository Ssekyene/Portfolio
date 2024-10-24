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

// apply styles for active nav-link
const links =  document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', function() {
    //storing the clicked link
    localStorage.setItem('activeLink', this.getAttribute('href'));

    setActiveLink();
  });  
});

function setActiveLink() {
  // remove active class from all links and add it only on the active link
  links.forEach(link => link.classList.remove('active'));

  const activeLink = localStorage.getItem('activeLink');
  if (activeLink) {
    const link = document.querySelector(`a[href="${activeLink}"]`);
    if (link) {
      link.classList.add('active');
    }
  }
}

// call on page reload
setActiveLink();

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