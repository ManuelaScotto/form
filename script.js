// COSTANTI
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.querySelector('.form');
const button = document.getElementById('btn');
const input = document.querySelectorAll('input')
const small = document.querySelectorAll('small')
const smallUser = document.querySelector('.user > small');
const smallEmail = document.querySelector('.email > small');
const smallPass = document.querySelector('.pass > small');
const smallPass2 = document.querySelector('.pass2 > small');
const btn = document.querySelector('.btn');

// EVENTO
form.addEventListener('submit', addAccount);

// CALLBACK
function addAccount(e) {
    let userValid = /^[a-z0-9]{4,25}$/i;
    let emailValid = /\w+@\w+\.\w{2,4}/i;
    let passwordValid = /^[a-z0-9_-]{6,18}$/i;

    if (username.value === '') {
        setError(username, 'Il campo username è vuoto');
    } else if (!userValid.test(username.value)) {
        setError(username, 'Lo Username deve avere almeno 4 caratteri.Inserire solo lettere e numeri')
    } else {
        username.classList.remove('error-active');
        smallUser.classList.remove('error-active');
        smallUser.innerHTML = ' ';
    }
    if (email.value === '') {
        setError(email, 'Il campo email è vuoto');
    } else if (!emailValid.test(email.value)) {
        setError(email, 'Email non corretta')
    } else {
        email.classList.remove('error-active');
        smallEmail.classList.remove('error-active');
        smallEmail.innerHTML = '';
    }
    if (password.value === '') {
        setError(password, 'Il campo password è vuoto');
    } else if (!passwordValid.test(password.value)) {
        setError(password, 'La password non è valida: deve avere minimo 6 caratteri e accetta solo lettere, numeri, underscores e trattini')
        console.log(password.value);
    } else {
        password.classList.remove('error-active');
        smallPass.classList.remove('error-active');
        smallPass.innerHTML = ' ';
    }
    if (password2.value === '') {
        setError(password2, 'Devi inserire la password di conferma');
    } else if (password2.value !== password.value) {
        setError(password2, 'Password non corrispondente')
    } else {
        password2.classList.remove('error-active');
        smallPass2.classList.remove('error-active');
        smallPass2.innerHTML = ' ';
    }
    if (userValid.test(username.value) && emailValid.test(email.value) && passwordValid.test(password.value) && password2.value === password.value) {
        username.value = '';
        email.value = '';
        password.value = '';
        password2.value = '';
        removeClass();
        document.form.submit();
    }
    e.preventDefault();
}


// FUNCTION 
function setError(input, text) {
    let small = input.nextElementSibling;
    input.classList.add('error-active');
    small.classList.add('error-active');
    small.innerHTML = text;
    console.log(input.nextElementSibling);
    console.log(text);
}

function removeClass() {
    input.forEach(function (e) {
        if (e.classList.contains('error-active')) {
            e.classList.remove('error-active')
        };
    })
    small.forEach(function (e) {
        if (e.classList.contains('error-active')) {
            e.classList.remove('error-active');
            small.children.innerHTML = '';
        };
    })
}