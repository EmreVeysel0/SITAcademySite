document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const error = document.getElementById('registerError');

  if (password !== confirm) {
    error.style.color = 'red';
    error.textContent = "Паролите не съвпадат.";
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.find(user => user.email === email)) {
    error.style.color = 'red';
    error.textContent = "Имейлът вече е регистриран.";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  error.style.color = 'green';
  error.textContent = "Успешна регистрация! Пренасочване към вход...";
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
});
