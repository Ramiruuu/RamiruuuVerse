const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease';
          card.style.opacity = '1';
        }, 10);
      } else {
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.display = 'none';
        }, 500);
      }
    });
  });
});