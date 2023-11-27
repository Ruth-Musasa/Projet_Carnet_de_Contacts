//Section prénom checking

let prénom = document.querySelector("#nameInpute");
prénom.addEventListener('change', validateForm)

function validateForm(event) {
    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z]$', 'g');
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
    nameRegExp = new RegExp('^[a-zA-Z]$', 'g');
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

// section telephone

var info = document.querySelector("#phone");
info.addEventListener('change', process);

function process(event) {
    event.preventDefault();
    phoneRegExp = new RegExp('^(084|085|080|089|081|082|099|097|090)([0-9]{7})$', 'g');
    let testPhone = phoneRegExp.test(info.value);
    let erreur = info.nextElementSibling;

    if (testPhone) {
        erreur.innerHTML = "";
        info.style.border = "1px solid rgb(179, 177, 177)";
    }
    else if (info.value.length !== 10) {
        erreur.innerHTML = 'Veuillez saisir un numero correcte composée de 10 chiffres'
        info.style.border = "2px solid red"
    }
    else {
        erreur.innerHTML = 'Veuillez saisir un numero correcte'
        info.style.border = "2px solid red"
    }
}
// section groupe
let groupe = document.querySelector('#groupe');

//Section Email Checking

let email = document.querySelector('#email_checking');
email.addEventListener('change', checking);

function checking(event) {
    event.preventDefault();
    emailRegExp = new RegExp('^[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$', 'g');
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

// section Bio
let bio = document.querySelector('#inputBio_height');

// gitsection image 

let imgStyle = document.querySelector('#inputImg_height')
let img = document.querySelector('#image');
img.style.opacity = 0;
img.addEventListener('change', imgchecking);

function imgchecking(event) {
    event.preventDefault();
    imgRegExp = new RegExp('^(.+[\.]{1}(jpg|png|jpeg))$', 'g');
    let testimg = imgRegExp.test(img.value);
    let erreur = img.nextElementSibling;

    if (testimg == true) {
        if (this.files[0].size <= 5000000) {
            erreur.innerHTML = "";
            imgStyle.style.border = "2px dashed #D5E9E1"; 
            imgStyle.style.backgroundColor = "#D5E9E1"
        } else {
            erreur.innerHTML = 'Deposer une image de moins de 5Mo'
            imgStyle.style.border = "2px dashed red"
            imgStyle.style.backgroundColor = "#F7ACA9"
        }
    }
    else {
        erreur.innerHTML = 'Deposer une image valide(png ou jpg)';
        imgStyle.style.border = "2px dashed red"
        imgStyle.style.backgroundColor = "#F7ACA9"
    }
}

// section boutton

let contacts;
let boutton = document.querySelector("#button_color--blue")
boutton.onclick = function () {
    contacts = new Object();
    contacts.nom = nom.value;
    contacts.prenom = prénom.value;
    contacts.telephone = info.value;
    contacts.groupe = groupe.value;
    contacts.email = email.value;
    contacts.bio = bio.value;
    contacts.img =
        console.log(contacts);

};

let contenaireListe;
function saveData() {
    contenaireListe = document.querySelector(".contenaire--liste");
    localStorage.setItem("data", contenaireListe.innerHTML);
    console.log(contacts);
};

function showTask() {
    contenaireListe.innerHTML = localStorage.getItem("data");
}
<<<<<<< HEAD
=======

showTask();

let newImg = document.createElement('img');
newImg.id = 'size_img';
newImg.src = 'img.value';
newImg.alt = 'Photo id';
document.getElementsByClassName('.contenaire--liste').appendChild(newImg);
newImg.innerHTML = newImg.src

// document.body.appendChild(span);
span.innerHTML = 'Du texte en plus !';
console.log(newImg);
>>>>>>> 704fed49d8b639f46103c73e5b614fb876a493f3
