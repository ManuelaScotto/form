///////////////////////////////////////////////////
/////                 COSTANTI      
/////////////////////////////////////////////////

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
const newAccount = document.getElementById('newAccount')

/////////////////////////////////////////////////
/////                 EVENTO      
/////////////////////////////////////////////////

/* creo la condizione location per controllare il path: se sono in index.html allora faccio l'evento altrimenti se mi trovo in account.html stampa il testo */
if (location.href === 'file:///C:/Users/scman/OneDrive/Desktop/esercitazioni/js/form/index.html') {
    form.addEventListener('submit', addAccount);
} else if (location.href === 'file:///C:/Users/scman/OneDrive/Desktop/esercitazioni/js/form/account.html?') {
    newAccount.innerHTML = 'REGISTRAZIONE AVVENUTA CON SUCCESSO!!'
}
///////////////////////////////////////////////////
/////                 CALLBACK
/////////////////////////////////////////////////

function addAccount(e) {
    // espressioni regolari
    let userValid = /^[a-z0-9]{4,25}$/i;
    let emailValid = /\w+@\w+\.\w{2,4}/i;
    let passwordValid = /^[a-z0-9_-]{6,18}$/i;

    // validazioni 
    if (username.value === '') {
        setError(username, 'Il campo username è vuoto');
    } else if (!userValid.test(username.value)) { //per l'espressione regolare
        setError(username, 'Lo Username deve avere almeno 4 caratteri.Inserire solo lettere e numeri')
    } else {
        // rimuove le classi e pulisce i campi quando l'utente inserisce un nome valido
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
        // se tutti i campi sono corretti pulisci, rimuovi le classi e vai ad un'altra pagina
        username.value = '';
        email.value = '';
        password.value = '';
        password2.value = '';
        removeClass();
        document.form.submit(); //nell'html ho inserito nel form l'attributo action con la pagina in cui ci dobbiamo spostare
    }
    e.preventDefault();
}

///////////////////////////////////////////////////
/////                 FUNCTION    
/////////////////////////////////////////////////

function setError(input, text) {
    let small = input.nextElementSibling; //recupero lo small di quell'input
    input.classList.add('error-active');
    small.classList.add('error-active');
    small.innerHTML = text; //scrivo il testo inserito quando chiamo la funzione
}

function removeClass() {
    // rimuove tutte le classi 'error-active' se presenti in input e small e svuoto il campo
    input.forEach(function (e) {
        if (e.classList.contains('error-active')) {
            e.classList.remove('error-active')
        };
    })
    small.forEach(function (e) {
        if (e.classList.contains('error-active')) {
            e.classList.remove('error-active');
            small.innerHTML = '';
        };
    })
}