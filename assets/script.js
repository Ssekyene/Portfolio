/****** toggle for the navbar  *****/
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

/****** apply styles for active nav-link ******/
const links =  document.querySelectorAll('.nav-link, .hero-link');
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
    const activeAnchor = document.querySelector(`a[href="${activeLink}"]`);
    if (activeAnchor) {
      activeAnchor.classList.add('active');
    }
  }
}

// call on page reload
setActiveLink();


/****** apply styles to activate home nav-link when logo is clicked *****/
const logo = document.querySelector('#logo');
const indexLink = document.querySelector('a[href="./index.html"]');
const navLinks = document.querySelectorAll('.nav-link');

// Set the index link active when the logo is clicked
function setActiveIndexLink(lnk){
  navLinks.forEach(link => link.classList.remove('active'));
  lnk.classList.add('active');
  localStorage.setItem('indexLink', lnk.getAttribute('href')); // storing the active link
}

logo.addEventListener('click', function() {
  localStorage.setItem('logoClicked', 'true');
  setActiveIndexLink(indexLink);
});

// activating the index page nav link on page reload when the logo is clicked
const logoClicked = localStorage.getItem('logoClicked');
if (logoClicked === 'true') {
  document.addEventListener('DOMContentLoaded', function() {
      localStorage.removeItem('logoClicked');
      const indexLinkPath = localStorage.getItem('indexLink');
      if (indexLinkPath) {
        const indexLink = document.querySelector(`a[href="${indexLinkPath}"]`);
      }
      if (indexLink) {
        setActiveIndexLink(indexLink);
      }
  });
}


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

/*** modal functionality ***/
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// Open the modal
contactBtn.addEventListener('click', () => {
  // contactModal.style.display = 'block';
  contactModal.classList.add('show');
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
  // contactModal.style.display = 'none';
  contactModal.classList.remove('show');
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    // contactModal.style.display = 'none';
    contactModal.classList.remove('show');
  }
});