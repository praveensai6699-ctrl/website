// Menu Tab Switching
function switchMenu(id, btn) {
  // Hide all panels
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.remove('active');
  });
  
  // Remove active class from all tabs
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.remove('active');
  });
  
  // Show selected panel and activate button
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// Smooth scroll to sections on nav link click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    form.reset();
  });
}