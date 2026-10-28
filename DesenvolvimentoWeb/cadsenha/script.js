const registerCotainer = document.getElementById('registerContainer');
const loginContainer = document.getElementById('loginContainer');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

const registerMessage = document.getElementById('registerMessage');
const loginMessage = document.getElementById('loginMessage');

function saveUser(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

function validateUser(password) {
    const regex = /^d{6}$/;
    return regex.test(password);
}

registerForm.addEventListener('submit', (e) => {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (username.trim() === '' || validatePassword(password)) {
        registerMessage.textContent = 'Nome de Usuário ou senha inválidos!';
        registerMessage.className = 'error';
        return;
    } 
    saveUser(username, password);
    registerMessage.textContent = 'Usuário cadastrado com sucesso!';
    registerMessage.className = '';

    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

if  (username === storedUsername && password === storedPassword) {
    loginMessage.textContent = 'Login bem-sucedido!';
    loginContainer.style.display = 'none';
    welcomeContainer.style.display = 'block';
} else {
    loginMessage.textContent = 'Nome de Usuário ou senha inválidos!';
    loginMessage.className = 'error';
}  
});