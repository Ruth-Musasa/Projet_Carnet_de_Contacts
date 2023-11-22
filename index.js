
// gitsection image 
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
        erreur.innerHTML = 'Deposer une image valide(png ou jpg)'
        img.style.border = "2px solid red"
    }
}



// section telephone

// const info = document.querySelector(".alert-info");

// function process(event) {
//     event.preventDefault();

//     const phoneNumber = phoneInput.getNumber();
//     alert(phoneNumber)
//     alert(typeof phoneNumber)
//     if (typeof phoneNumber == "number" || phoneNumber.length == 13) {
//         if ((phoneNumber[3] == 9 || phoneNumber[3] == 9) && (phoneNumber[4] == 2 || phoneNumber[4] == 4 || phoneNumber[4] == 7 || phoneNumber[4] == 8 || phoneNumber[4] == 9)) {
//             info.style.display = "";
//             alert(typeof phoneNumber)
//             info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`
//         }
//     }
//     else {
//         info.style.display = "";
//         info.innerHTML = `ecrivez un bon num <strong></strong>`

let email = document.querySelector('#email_checking');

email.addEventListener('change', checking);

function checking(event) {

    event.preventDefault();

    emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailRegExp.test(email.value);
    let erreur = email.nextElementSibling;
    if (email.value.trim() == "") {
        erreur.innerHTML = 'Le champ Email est requis'
        email.style.border = "2px solid red"
    }
    else if (testEmail) {
        erreur.innerHTML = "";
        email.style.border = "1px solid rgb(179, 177, 177)"
    } else {
        erreur.innerHTML = 'Veuillez saisir une adresse E-mail correcte'
        email.style.border = "2px solid red"
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
        erreur.innerHTML = "Veuillez saisir un prénom valide d'au moins 3 caractères"
        prénom.style.border = "2px solid red"
    }
    else if (prénom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un prénom valide inférieur à 50 caractères'
        prénom.style.border = "2px solid red"
    }

    else if (testname) {
        erreur.innerHTML = "";
        prénom.style.border = "1px solid rgb(179, 177, 177)"
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
        erreur.innerHTML = "Veuillez saisir un nom valide d'au moins 3 caractères"
        nom.style.border = "2px solid red"

    }
    else if (nom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un nom valide inférieur à 50 caractères'
        nom.style.border = "2px solid red"

    }

    else if (testname) {
        erreur.innerHTML = "";
        nom.style.border = "1px solid rgb(179, 177, 177)"
    }
}
