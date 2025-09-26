document.addEventListener('DOMContentLoaded', function() {
  const lienProjets = document.querySelector('nav ul li a[href="projets.html"]');
  const message = document.getElementById('message-temp');

  if (lienProjets && message) {
    lienProjets.addEventListener('click', function(e) {
      e.preventDefault(); // empêche la navigation
      message.classList.remove('hidden');
      message.classList.add('show');

      // Faire disparaître après 4 secondes
      setTimeout(() => {
        message.classList.remove('show');
        message.classList.add('hidden');
      }, 4000);
    });
  }
});
