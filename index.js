let idEditedContact = null;
let erreur;
//Section prénom validationEmail
let prénom = document.querySelector("#nameInpute");
prénom.addEventListener('change', validationPrenom)
function validationPrenom() {
    nameRegExp = new RegExp('^[a-zA-Z0-9 ]{3,50}$', 'g');
    testname = nameRegExp.test(prénom.value);
    erreur = prénom.nextElementSibling;
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
function validateName() {
    nameRegExp = new RegExp('^[a-zA-Z0-9 ]{3,50}$', 'g');
    testname = nameRegExp.test(nom.value);
    erreur = nom.nextElementSibling;
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
function checkPhoneExistence(){
    for (let i = 0; i < listContact.length; i++) {
        if (listContact[i].telephone == phone.value) {
          return false;
        }
      }
      return true;
    }

let phone = document.querySelector("#phone");
phone.addEventListener('change', validationPhone);
function validationPhone() {
    phoneRegExp = new RegExp('^(084|085|080|089|081|082|099|097|090)([0-9]{7})$', 'g');
    testPhone = phoneRegExp.test(phone.value);

     erreur = phone.nextElementSibling;


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
groupe.addEventListener('change', validationGroupe);
function validationGroupe() {
groupRegExp = new RegExp('^[a-zA-Z0-9 ]+$', 'g');
testGroupe = groupRegExp.test(groupe.value);
if (!testGroupe) {
   confirm("Soyez gentil SVP")
    groupe.value = "";
}}

//Section Email validationEmail

function checkEmailExistence() {
    for (let i = 0; i < listContact.length; i++) {
      if (listContact[i].Email == email.value) {
        return false;
      }
    }
    return true;
  }

let email = document.querySelector('#email_checking');
email.addEventListener('change', validationEmail);

function validationEmail() {
    emailRegExp = new RegExp('^[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$', 'g');
    testEmail = emailRegExp.test(email.value);
    erreur = email.nextElementSibling;

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
bio.addEventListener('change', validationBio);
function validationBio() {
bioRegExp = new RegExp('^[a-zA-Z0-9 ]+$', 'g');
testBio = bioRegExp.test(bio.value);
if (!testBio) {
   confirm("Soyez gentil SVP")
    bio.value = "";
}}

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
            return true;
        } else {
            erreur.innerHTML = 'Deposer une image de moins de 5Mo'
            return false;
        }
    } else {
        erreur.innerHTML = 'Deposer une image valide(png ou jpg)';
        return false;
    }
}

let fileUrl;
img.addEventListener('change', (e) => { showFile(e) })
function showFile(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
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
        image: fileUrl,
    }
    return objContact
}

//********************VERIFICATION DU FORMULAIRE ET VALIDATION DU BOUTON****************************** */

let form = document.querySelector(".contenaire--formulaire--marges")
let button = document.querySelector("#button_color--blue");
let btnEdit = document.getElementById('button_color--blue--edit');
let btnRenit = document.getElementById('button_color--red');
let btnAnnuler = document.getElementById('button_color--red--edit');
btnEdit.hidden = true;
btnAnnuler.hidden = true;
//Vérification du formulaire : la fonction gère les couleurs du bouton creer en fonction de la validité des champs du formulaire (A NE PAS MODIFIER)


function formvalidation(type) {
    if (validationPrenom() && validateName() && validationPhone() && validationEmail()) {

        if (type == 'EDIT')
            updateContact()
        else
            objectaff();
        return true
    }
};

//Validation des boutons 
button.addEventListener('click', (event) => validationOnClickCreer(event, 'CREATE'))
btnEdit.addEventListener('click', (event) => validationOnClickModifier(event, 'EDIT'))



function validationOnClickCreer(event, type) {
    event.preventDefault();
   
//Vérification des emails et numéros de téléphone existant sur la liste de contact

    if(!checkEmailExistence()){ 
        erreur = email.nextElementSibling;
        erreur.innerHTML = 'Cette adresse existe déjà dans la liste de contact.';
        email.style.border = "2px solid red"   
    }

    else if (!checkPhoneExistence()){
        erreur = phone.nextElementSibling;
        erreur.innerHTML = 'Ce numéro existe déjà dans la liste de conatct.';
        phone.style.border = "2px solid red"
    }
    else if (formvalidation(type) && imgvalidation.call(img)) {
        listContact.push(objContact);
        afficherContacts(event)
        button.style.backgroundColor = "rgb(8, 128, 214)";
    }   
    else {
        confirm(" Vous devez remplir tous les champs pour etre en mesure de crée un contact")
        button.style.backgroundColor = "rgb(85, 85, 85)";
    }
};

function validationOnClickModifier(event, type) {
    event.preventDefault();
   
//Vérification des emails et numéros de téléphone existant sur la liste de contact
if (formvalidation(type) && imgvalidation.call(img)) {
        listContact.push(objContact);
        afficherContacts(event)
        button.style.backgroundColor = "rgb(8, 128, 214)";
    }   
    else {
        confirm(" Vous devez remplir tous les champs pour etre en mesure de crée un contact")
        button.style.backgroundColor = "rgb(85, 85, 85)";
    }
};

function afficherContacts() {
    let affichageListe = document.querySelector(".contenaire--liste");
    affichageListe.innerHTML = "";
    listContact.forEach((objContact, indexContact) => {

        const div = document.createElement("div");
        affichageListe.appendChild(div);
        div.classList.add('contenaire--liste');
        div.innerHTML =
            `<div class="contenaire--list--space">
    <div id="size_img"><img src="${objContact.image}" alt = "image"/></div>
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
        <button id="edit_btn" onclick="editContact(${indexContact})"> <img src="icon/Vector.png" alt="" > </button>
        <button id="delet_btn" onclick="suprimeContact(${indexContact})"> <img src="icon/VectorSupp.png" alt="" > </button>
    </div>
</div>`
        button.style.backgroundColor = "rgb(8, 128, 214)"
    })
    document.querySelector('form').reset();
    img.value = null
    saveData();
}

// function de modification
function editContact(indexContact) {
    btnEdit.hidden = false;
    button.hidden = true;
    btnAnnuler.hidden = false;
    btnRenit.hidden = true;
    prénom.value = listContact[indexContact].prenom;
    nom.value = listContact[indexContact].Nom;
    phone.value = listContact[indexContact].telephone;
    groupe.value = listContact[indexContact].Groupe;
    email.value = listContact[indexContact].Email;
    bio.value = listContact[indexContact].Bio;
    idEditedContact = indexContact;
    saveData();
};

btnAnnuler.onclick = function () {
    btnEdit.hidden = true;
    button.hidden = false;
    btnAnnuler.hidden = true;
    btnRenit.hidden = false;
}
// function de modification

function updateContact() {
    listContact[idEditedContact].prenom = prénom.value;
    listContact[idEditedContact].Nom = nom.value;
    listContact[idEditedContact].image = fileUrl;
    listContact[idEditedContact].telephone = phone.value;
    listContact[idEditedContact].Groupe = groupe.value;
    listContact[idEditedContact].Email = email.value;
    listContact[idEditedContact].Bio = bio.value;
    btnEdit.hidden = true;
    button.hidden = false;
    btnAnnuler.hidden = true;
    btnRenit.hidden = false;
    afficherContacts();
}

// function de supression

function suprimeContact(indexContact) {
    if (confirm("Etes vous sur de vouloir supprimer ce contact ? ")) {
        listContact.splice(indexContact, 1);
        afficherContacts()
    }
}

//Local storage
const contenaireList=document.querySelector(".contenaire--liste");
function saveData(){
    localStorage.setItem("data", contenaireList.innerHTML);
}
function showContact(){
    contenaireList.innerHTML=localStorage.getItem("data")
}
showContact();




