document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuOpen = false;

  burger.addEventListener('click', function() {
    menuOpen = !menuOpen;
    burger.setAttribute('aria-expanded', menuOpen);
    mobileMenu.style.display = menuOpen ? 'flex' : 'none';
  });

  // Dropdown mobile: toggle on click
  document.querySelectorAll('.mobile-menu .has-dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle('open');
    });
  });

  // Option: Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (
      menuOpen &&
      !burger.contains(e.target) &&
      !mobileMenu.contains(e.target)
    ) {
      menuOpen = false;
      burger.setAttribute('aria-expanded', false);
      mobileMenu.style.display = 'none';
    }
  });
});