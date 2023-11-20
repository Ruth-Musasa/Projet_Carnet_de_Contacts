<<<<<<< HEAD
// section image a ne pas supprimer!!
var img = document.getElementById("image")
// img.style.opacity = 0;
img.addEventListener('',img_validation);
=======
// gitsection image a ne pas supprimer!!
const img = document.getElementById("image")
img.style.opacity = 0;
>>>>>>> ca1f1fb38484fe7e5b546ac944165d050c4d4414


<<<<<<< HEAD

=======
>>>>>>> ca1f1fb38484fe7e5b546ac944165d050c4d4414

//Section Email Checking

let email = document.querySelector('#email_checking');


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


<<<<<<< HEAD
=======
//Section prénom checking
let prénom = document.querySelector("#nameInpute");
prénom.addEventListener('change', validateForm)

function validateForm(event) {

    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z]', 'g');

    let testname = nameRegExp.test(prénom.value);
    let erreur = prénom.nextElementSibling;
 

  if (prénom.value.length < 3) {
    erreur.innerHTML = 'Veuillez saisir un nom valide supérieur a 3 caractere'
    prénom.classList.add("erreur")
} 
  else if (prénom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un nom valide inférieur a 50 caractere'
        prénom.classList.add("erreur")  
    } 
    
    else if (testname) {
        erreur.innerHTML = "";
    }
}

//Section nom checking
>>>>>>> ca1f1fb38484fe7e5b546ac944165d050c4d4414


let nom = document.querySelector("#nom");
nom.addEventListener('change', validateName)

function validateName(event) {

    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z]', 'g');

    let testname = nameRegExp.test(nom.value);
    let erreur = nom.nextElementSibling;


  if (nom.value.length < 3) {
    erreur.innerHTML = 'Veuillez saisir un nom valide supérieur a 3 caractere'
    nom.classList.add("erreur")
    
} 
  else if (nom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un nom valide inférieur a 50 caractere'
        nom.classList.add("errur")
          
    } 
    
    else if (testname) {
        erreur.innerHTML = "";
    
    }

}

