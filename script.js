document.addEventListener('DOMContentLoaded', () => {
  const landingPage = document.getElementById('landingPage');
  const startButton = document.getElementById('startButton');
  const mainContent = document.getElementById('mainContent');
  const nav = document.getElementById('nav');

  const cameFromInternalNav = sessionStorage.getItem('internalNavigation');

  if (cameFromInternalNav === 'true') {
    landingPage.style.display = 'none';
    mainContent.classList.add('show');
    nav.classList.add('show');
    sessionStorage.removeItem('internalNavigation');
  } else {
    startButton.addEventListener('click', () => {
      landingPage.classList.add('fade-out');

      setTimeout(() => {
        landingPage.style.display = 'none';
        mainContent.classList.add('show');
        nav.classList.add('show');
      }, 1000);
    });
  }

  document.querySelectorAll('a[href^="index.html"], a[href^="Project"]').forEach(link => {
    link.addEventListener('click', () => {
      sessionStorage.setItem('internalNavigation', 'true');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});