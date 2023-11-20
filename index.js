// section image a ne pas supprimer!!
const img = document.getElementById("image")
img.style.opacity = 0;


//Section Email Checking

var email = document.querySelector('#email_checking');


email.addEventListener('change', checking);

function checking(event) {

    event.preventDefault();

    emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailRegExp.test(email.value);
    let erreur = email.nextElementSibling;

    if (testEmail) {
        erreur.innerHTML = "";
    } else {
        erreur.innerHTML = 'Veuillez saisir une adresse E-mail correcte'
        email.classList.add("erreur")
    }
}




// section telephone

const info = document.querySelector("#phone");
info.addEventListener('change', process);
function process(event) {
    event.preventDefault();

    phoneRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testPhone = phoneRegExp.test(info.value);
    let erreur = info.nextElementSibling;

    if (testPhone) {
        erreur.innerHTML = "";
    } else {
        erreur.innerHTML = 'Veuillez saisir un numero correcte'
        info.classList.add("erreur")
    }
}



