
window.onload = function() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

 
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('displayName').textContent = currentUser.name;
  document.getElementById('displayEmail').textContent = currentUser.email;
  
 
  const firstLetter = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('profileAvatar').textContent = firstLetter;
  
  
  const joinDate = new Date().toLocaleDateString('bg-BG');
  document.getElementById('joinDate').textContent = joinDate;

  
  document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('Сигурни ли сте, че искате да излезете?')) {
      localStorage.removeItem('currentUser');
      window.location.href = "login.html";
    }
  });
};