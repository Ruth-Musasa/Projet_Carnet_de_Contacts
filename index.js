
//Section prénom checking

let prénom = document.querySelector("#nameInpute");
prénom.addEventListener('change', validateForm)

function validateForm(event) {
    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z]$', 'g');
    testname = nameRegExp.test(nom.value);

    let erreur = prénom.nextElementSibling;

    if (prénom.value.length < 3) {
        erreur.innerHTML = "Veuillez saisir un prénom valide d'au moins 3 caractères"
        prénom.style.border = "2px solid red"
        return false;
    }
    else if (prénom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un prénom valide inférieur à 50 caractères'
        prénom.style.border = "2px solid red"
        return false;
    }
    else {
        erreur.innerHTML = "";
        prénom.style.border = "1px solid rgb(179, 177, 177)"
        return true;
    }
}

//Section nom checking

let nom = document.querySelector("#nom");
nom.addEventListener('change', validateName)

function validateName(event) {
    event.preventDefault();
    nameRegExp = new RegExp('^[a-zA-Z]$', 'g');
    testname = nameRegExp.test(nom.value);
    let erreur = nom.nextElementSibling;

    if (nom.value.length < 3) {
        erreur.innerHTML = "Veuillez saisir un nom valide d'au moins 3 caractères"
        nom.style.border = "2px solid red"
        return false;
    }
    else if (nom.value.length > 50) {
        erreur.innerHTML = 'Veuillez saisir un nom valide inférieur à 50 caractères'
        nom.style.border = "2px solid red"
        return false;
    }
    else {
        erreur.innerHTML = "";
        nom.style.border = "1px solid rgb(179, 177, 177)"
        return true;
    }
}

// section telephone

var info = document.querySelector("#phone");
info.addEventListener('change', process);

function process(event) {
    event.preventDefault();
    phoneRegExp = new RegExp('^(084|085|080|089|081|082|099|097|090)([0-9]{7})$', 'g');
    testPhone = phoneRegExp.test(info.value);
    let erreur = info.nextElementSibling;

    if (testPhone) {
        erreur.innerHTML = "";
        info.style.border = "1px solid rgb(179, 177, 177)";
        return true
    }
    else if (info.value.length !== 10) {
        erreur.innerHTML = 'Veuillez saisir un numero correcte composée de 10 chiffres'
        info.style.border = "2px solid red"
        return false
    }
    else {
        erreur.innerHTML = 'Veuillez saisir un numero correcte'
        info.style.border = "2px solid red"
        return false
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
img.addEventListener('change', imgchecking);

function imgchecking() {
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
    // let dropzone = document.querySelector('#size_img');
    let fileReader = new FileReader();
    fileReader.readAsDataURL(img.files[0]);
    fileReader.onload = () => {
        fileUrl = fileReader.result
        // dropzone.innerHTML = `<img src="${fileUrl}" alt = "image"/>`;
    }

}

let objContact
let listContact = [];
function objectaff() {

    objContact = {
        prenom: prénom.value,
        Nom: nom.value,
        telephone: info.value,
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

form.addEventListener('input', formChecking);


function formChecking(event) {

    event.preventDefault();

    if (validateForm(event) && validateName(event) && process(event) && groupe.value != "" && checking(event) && bio.value != "") {
        objectaff();
        showFile()
        console.log(objectaff());

        button.style.backgroundColor = "rgb(8, 128, 214)";
    }
    else {

        button.style.backgroundColor = "rgb(85, 85, 85)";
    }

}

//Validation du bouton creer

button.addEventListener('click', function (event) {
    event.preventDefault();
    imgchecking.call(img);
    execution(event)
});


function execution(event) {
    event.preventDefault();

    if (validateForm(event) && validateName(event) && process(event) && groupe.value != "" && checking(event) && bio.value != "") {


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
            <p id="affichage_Prénom">${objContact.prenom} </p>
            <p id="affichage_Nom">${objContact.Nom}</p>
            <p id="affichage_Groupe">- ${objContact.Groupe} </p> 
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


