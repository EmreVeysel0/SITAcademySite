
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  
  window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
      document.getElementById('userName').textContent = currentUser.name;
      const firstLetter = currentUser.name.charAt(0).toUpperCase();
      document.getElementById('userAvatar').textContent = firstLetter;
    }
  };
  
  
  function confirmLogout() {
    if (confirm('Сигурни ли сте, че искате да излезете?')) {
      localStorage.removeItem('currentUser');
      return true;
    }
    return false;
  }
  
 
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dashboard-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  });