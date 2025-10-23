const linkedin_link = document.getElementById("linkedin_socials");
const x_link = document.getElementById("x_socials");
const github_link = document.getElementById("github_socials");

linkedin_link.addEventListener("click",event =>{
  event.preventDefault(); 
  window.open("https://www.linkedin.com/in/atharva-joshi-4768662b8/", "_blank");
});

x_link.addEventListener("click",event =>{
  event.preventDefault(); 
  window.open("https://x.com/runner9771", "_blank");
});


github_link.addEventListener("click",event =>{
  event.preventDefault(); 
  window.open("https://github.com/AthravaJoshi725", "_blank");
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Connect button smooth scrolling
document.getElementById('contactme').addEventListener('click', function(e) {
  e.preventDefault();
  const connectSection = document.getElementById('connect');
  if (connectSection) {
    connectSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});