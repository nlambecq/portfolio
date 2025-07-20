document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
      // Crée le fond noir
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.93)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.style.cursor = 'zoom-out';
      overlay.style.animation = 'fadeInOverlay .3s';

      // Crée l'image en grand
      const imgLarge = document.createElement('img');
      imgLarge.src = img.src;
      imgLarge.alt = img.alt;
      imgLarge.style.maxWidth = '90vw';
      imgLarge.style.maxHeight = '90vh';
      imgLarge.style.borderRadius = '18px';
      imgLarge.style.boxShadow = '0 6px 60px #000a';
      imgLarge.style.background = '#222';
      imgLarge.style.objectFit = 'contain';
      imgLarge.style.animation = 'fadeInImg .5s';

      // Ferme la lightbox au clic ou Echap
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
      document.addEventListener('keydown', function esc(e) {
        if(e.key === "Escape"){
          if(document.body.contains(overlay)) document.body.removeChild(overlay);
          document.removeEventListener('keydown', esc);
        }
      });

      overlay.appendChild(imgLarge);
      document.body.appendChild(overlay);
    });
  });
});