// section image a ne pas supprimer!!
var img = document.getElementById("image")
// img.style.opacity = 0;
img.addEventListener('',img_validation);




//Section Email Checking

var email = document.querySelector('#email_checking');


email.addEventListener('change', checking);

function checking(event) {

    event.preventDefault();

    emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailRegExp.test(email.value);
    let erreur = email.nextElementSibling;

    if (email.value.trim()==""){
        erreur.innerHTML = 'Le champ email est requis'
        email.classList.add("erreur") 
    }

   else if (testEmail) {
        erreur.innerHTML = "";
    } else {
        erreur.innerHTML = 'Veuillez saisir une adresse E-mail correcte'
        email.classList.add("erreur")        
    }
}





