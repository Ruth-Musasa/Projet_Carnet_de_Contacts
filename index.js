//Section prénom validationEmail
let prénom = document.querySelector("#nameInpute");
prénom.addEventListener('change', validationPrenom)
function validationPrenom(event) {
    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z0-9]{3,50}$', 'g');
    testname = nameRegExp.test(prénom.value);
    let erreur = prénom.nextElementSibling;
    if (testname) {
        erreur.innerHTML = "";
        prénom.style.border = "1px solid rgb(179, 177, 177)"
        return true;
    } else if (prénom.value.length < 3) {
        erreur.innerHTML = "Veuillez saisir un prénom valide d'au moins 3 caractères"
        prénom.style.border = "2px solid red"
        return false;
    } else if (prénom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un prénom valide inférieur à 50 caractères'
        prénom.style.border = "2px solid red"
        return false;
    } else {
        erreur.innerHTML = 'Veuillez saisir un prénom valide composé de lettres'
        prénom.style.border = "2px solid red"
        return false;
    }
}

//Section nom validationEmail
let nom = document.querySelector("#nom");
nom.addEventListener('change', validateName)
function validateName(event) {
    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z0-9]{3,50}$', 'g');
    testname = nameRegExp.test(nom.value);
    let erreur = nom.nextElementSibling;
    if (testname) {
        erreur.innerHTML = "";
        nom.style.border = "1px solid rgb(179, 177, 177)"
        return true;
    } else if (nom.value.length < 3) {
        erreur.innerHTML = "Veuillez saisir un nom valide d'au moins 3 caractères"
        nom.style.border = "2px solid red"
        return false;
    } else if (nom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un nom valide inférieur à 50 caractères'
        nom.style.border = "2px solid red"
        return false;
    } else {
        erreur.innerHTML = 'Veuillez saisir un prénom valide composé de lettres'
        nom.style.border = "2px solid red"
        return false;
    }
}

// section telephone
var phone = document.querySelector("#phone");
phone.addEventListener('change', validationPhone);
function validationPhone(event) {
    event.preventDefault();
    phoneRegExp = new RegExp('^(084|085|080|089|081|082|099|097|090)([0-9]{7})$', 'g');
    testPhone = phoneRegExp.test(phone.value);
    let erreur = phone.nextElementSibling;
    if (testPhone) {
        erreur.innerHTML = "";
        phone.style.border = "1px solid rgb(179, 177, 177)";
        return true
    } else if (phone.value.length !== 10) {
        erreur.innerHTML = 'Veuillez saisir un numero correcte composée de 10 chiffres'
        phone.style.border = "2px solid red"
        return false
    } else {
        erreur.innerHTML = 'Veuillez saisir un numero correcte respectant les formats (Orange : 084,085,080,089, Vodacom: 081,082, Airtel : 099,097, Africell: 090)'
        phone.style.border = "2px solid red"
        return false
    }
}

// section groupe
let groupe = document.querySelector('#groupe');

//Section Email validationEmail
let email = document.querySelector('#email_checking');
email.addEventListener('change', validationEmail);
function validationEmail(event) {
    event.preventDefault();
    emailRegExp = new RegExp('^[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$', 'g');
    testEmail = emailRegExp.test(email.value);
    let erreur = email.nextElementSibling;
    if (testEmail) {
        erreur.innerHTML = "";
        email.style.border = "1px solid rgb(179, 177, 177)"
        return true;
    } else {
        erreur.innerHTML = 'Veuillez saisir une adresse E-mail correcte'
        email.style.border = "2px solid red"
        return false;
    }
}

// section Bio
let bio = document.querySelector('#inputBio_height');

// gitsection image 
let testimg;
let imgStyle = document.querySelector('#inputImg_height')
let img = document.querySelector('#image');
img.style.opacity = 0;
img.addEventListener('change', imgvalidation);
function imgvalidation() {
    imgRegExp = new RegExp('^.+/(jpg|png|jpeg)$', 'g');
    testimg = imgRegExp.test(this.files[0].type);
    let erreur = img.nextElementSibling;
    if (testimg) {
        if (this.files[0].size <= 5000000) {
            erreur.innerHTML = "";
            imgStyle.style.border = "2px dashed #D5E9E1";
            imgStyle.style.backgroundColor = "#D5E9E1";
            return true;
        } else {
            erreur.innerHTML = 'Deposer une image de moins de 5Mo'
            imgStyle.style.border = "2px dashed red"
            imgStyle.style.backgroundColor = "#F7ACA9"
            return false;
        }
    }
    else {
        erreur.innerHTML = 'Deposer une image valide(png ou jpg)';
        imgStyle.style.border = "2px dashed red"
        imgStyle.style.backgroundColor = "#F7ACA9"
        return false;
    }
}
let fileUrl;
function showFile() {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(img.files[0]);
    fileReader.onload = () => {
        fileUrl = fileReader.result
        return true
    }
}

// creation de l'objet contact
let objContact
let listContact = [];
function objectaff() {
    objContact = {
        prenom: prénom.value,
        Nom: nom.value,
        telephone: phone.value,
        Groupe: groupe.value,
        Email: email.value,
        Bio: bio.value,
    }
    listContact.push(objContact);
    return objContact
}

//********************VERIFICATION DU FORMULAIRE ET VALIDATION DU BOUTON****************************** */

let form = document.querySelector(".contenaire--formulaire--marges")
let button = document.querySelector("#button_color--blue");

//Vérification du formulaire : la fonction gère les couleurs du bouton creer en fonction de la validité des champs du formulaire (A NE PAS MODIFIER)

form.addEventListener('input', formvalidation);

function formvalidation(event) {
    event.preventDefault();
    if (validationPrenom(event) && validateName(event) && validationPhone(event) && groupe.value != "" && validationEmail(event) && bio.value != "" ) {
        objectaff();
        showFile()
        button.style.backgroundColor = "rgb(8, 128, 214)";
    } else {
        button.style.backgroundColor = "rgb(85, 85, 85)";
    }
}

//Validation du bouton creer

button.addEventListener('click', function (event) {
    event.preventDefault();
    imgvalidation.call(img);
    execution(event)
});

function execution(event) {
    event.preventDefault();
    if (validationPrenom(event) && validateName(event) && validationPhone(event) && groupe.value != "" && validationEmail(event) && bio.value != "" ) {

        //PLACEZ LA FONCTION QUI AJOUTE ET AFFICHE LES COORDONNEES ICI 

        let affichageListe = document.querySelector(".contenaire--liste");
        const div = document.createElement("div");
        affichageListe.appendChild(div);
        div.classList.add('contenaire--liste');
        div.innerHTML =
            `<div class="contenaire--list--space">
    <div id="size_img"><img src="${fileUrl}" alt = "image"/></div>
    <div>
        <div id="contenaire--liste--id">
            <p> ${objContact.prenom} </p>
            <p> ${objContact.Nom} </p>
            <p> - ${objContact.Groupe} </p> 
        </div>
        <div id="contenaire--liste--num">${objContact.telephone}</div>
        <div id="contenaire--liste--bio">${objContact.Bio}</div>
    </div>
    <div id="icon">
            <div id="edit_btn"> <img src="icon/Vector.png" alt=""></div>
            <div id="delet_btn"> <img src="icon/VectorSupp.png" alt=""></div>
        </div>
</div>`
        button.style.backgroundColor = "rgb(8, 128, 214)"
    }
    showFile();
}


