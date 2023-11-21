// gitsection image a ne pas supprimer!!
const img1 = document.getElementById("image")
img1.style.opacity = 0;

let img = document.querySelector('#image');

img.addEventListener('change', imgchecking);

function imgchecking(event) {

    event.preventDefault();

    imgRegExp = new RegExp('^[a-zA-Z0-9.-_]+[.]{1}'+'jpg|png', 'g');
    console.log(imgRegExp);
    let testimg = imgRegExp.test(img.value);
    let erreur = img.nextElementSibling;
    console.log(testimg);
    if (testimg == true) {
        erreur.innerHTML = "";
    } else {
        erreur.innerHTML = 'Deposer une image valide (png ou jpg)'
        img.classList.add("erreur")
    }
}



// section telephone

const info = document.querySelector("#phone");
info.addEventListener('change', process);
function process(event) {
    event.preventDefault();
    phoneRegExp = new RegExp('^084|085|080|089|081|082|099|097|090'+'[0-9]{7}', 'g');
    let testPhone = phoneRegExp.test(info.value);
    console.log(testPhone);
    console.log(info.value);
    let erreur = info.nextElementSibling;
    if (testPhone) {

            erreur.innerHTML = "";
    }
    else if (info.value.length!==10) {
            erreur.innerHTML = 'Veuillez saisir un numero correcte composée de 10 chiffres'
            info.classList.add("erreur")
        }
    else {
        erreur.innerHTML = 'Veuillez saisir un numero correcte'
        info.classList.add("erreur")
    }
}

//Section Email Checking

let email = document.querySelector('#email_checking');


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

