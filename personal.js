
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Modal for CV download
  const cvLink = document.querySelector('.cv a');
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.visibility = 'hidden';
  modal.innerHTML = `
      <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
          <p>Click the button below to download my CV</p>
          <a href="path/to/my/cv.pdf" download style="background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Download CV</a>
          <p><button id="close-modal" style="background: red; color: white; padding: 10
