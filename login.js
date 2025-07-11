document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.email === email && user.password === password);

    if (existingUser) {
     
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      window.location.href = 'profile.html'
    } else {
      alert('Невалиден имейл или парола.');
    }
  });
});
