let idEditedContact = null;
let form = document.querySelectorAll('input');
let erreur;
let nom = document.querySelector("#nom");
let prénom = document.querySelector("#nameInpute");
let phone = document.querySelector("#phone");
let objContact;
let listContact = getContacts();
afficherContacts();
let email = document.querySelector('#email_checking');
let bio = document.querySelector('#inputBio_height');
let groupe = document.querySelector('#groupe');
let testimg;
let img = document.querySelector('#image');
let fileUrl;
let button = document.querySelector("#button_color--blue");
let btnEdit = document.getElementById('button_color--blue--edit');
let btnRenit = document.getElementById('button_color--red');
let btnAnnuler = document.getElementById('button_color--red--edit');
let btnrenit = document.querySelector('#button_color--red');


groupe.addEventListener('change', validationGroupe);
bio.addEventListener('change', validationBio);
email.addEventListener('change', validationEmail);
prénom.addEventListener('change', validationPrenom)
nom.addEventListener('change', validateName)
img.addEventListener('change', imgvalidation);
phone.addEventListener('change', validationPhone)
img.addEventListener('change', (e) => { showFile(e) })
btnrenit.addEventListener('click', renit)
button.addEventListener('click', (event) => validationOnClickCreer(event, 'CREATE'))
btnEdit.addEventListener('click', (event) => validationOnClickModifier(event, 'EDIT'))
btnEdit.hidden = true;
btnAnnuler.hidden = true;


function validationPrenom() {
    let nameRegExp = new RegExp('^[a-zA-Z0-9 ]{3,50}$', 'g');
    let testname = nameRegExp.test(prénom.value);
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

function validateName() {
    let nameRegExp = new RegExp('^[a-zA-Z0-9 ]{3,50}$', 'g');
    let testname = nameRegExp.test(nom.value);
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

function checkPhoneExistence() {
    for (let i = 0; i < listContact.length; i++) {
        if (listContact[i].telephone == phone.value) {
            return false;
        }
    } return true;
}

function validationPhone() {
    let phoneRegExp = new RegExp('^(084|085|080|089|081|082|099|097|090)([0-9]{7})$', 'g');
    let testPhone = phoneRegExp.test(phone.value);
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

function validationGroupe() {
    let groupRegExp = new RegExp('[(\<)+(\=)+]', 'g');
    let testGroupe = groupRegExp.test(groupe.value);
    if (testGroupe) {
        confirm("Soyez gentil SVP")
        groupe.value = "";
    }
}

function checkEmailExistence() {
    for (let i = 0; i < listContact.length; i++) {
        if (listContact[i].Email == email.value) {
            return false;
        }
    } return true;
}

function validationEmail() {
    let emailRegExp = new RegExp('^[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$', 'g');
    let testEmail = emailRegExp.test(email.value);
    erreur = email.nextElementSibling;
    if (testEmail) {
        erreur.innerHTML = "";
        email.style.border = "1px solid rgb(179, 177, 177)";
        return true;
    } else {
        erreur.innerHTML = 'Veuillez saisir une adresse E-mail correcte'
        email.style.border = "2px solid red"
        return false;
    }
}

function validationBio() {
    let bioRegExp = new RegExp('[(\<)+(\=)+]', 'g');
    let testBio = bioRegExp.test(bio.value);
    if (testBio) {
        confirm("Soyez gentil SVP")
        bio.value = "";
    }
}

img.style.opacity = 0;
function imgvalidation() {
    let imgRegExp = new RegExp('^.+/(jpg|png|jpeg)$', 'g');
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

function showFile(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = () => {
        fileUrl = fileReader.result
        return true
    }
}

function formvalidation(type) {
    if (validationPrenom() && validateName() && validationPhone() && validationEmail()) {
        if (type == 'EDIT')
            updateContact()
        else
            objectaff();
        return true
    }
};

function validationOnClickCreer(event, type) {
    event.preventDefault();
    if (!checkEmailExistence()) {
        erreur = email.nextElementSibling;
        erreur.innerHTML = 'Cette adresse existe déjà dans la liste de contact.';
        email.style.border = "2px solid red"
    } else if (!checkPhoneExistence()) {
        erreur = phone.nextElementSibling;
        erreur.innerHTML = 'Ce numéro existe déjà dans la liste de conatct.';
        phone.style.border = "2px solid red"
    } else if (formvalidation(type) && imgvalidation.call(img)) {
        setContacts(listContact)
        listContact.push(objContact);
        afficherContacts(event)
        button.style.backgroundColor = "rgb(8, 128, 214)";
    } else {
        confirm(" Vous devez remplir tous les champs pour etre en mesure de crée un contact")
        button.style.backgroundColor = "rgb(85, 85, 85)";
    }
};

function validationOnClickModifier(event, type) {
    event.preventDefault();
    if (formvalidation(type) && imgvalidation.call(img)) {
        listContact.push(objContact);
        setContacts(listContact)
        afficherContacts(event)
        button.style.backgroundColor = "rgb(8, 128, 214)";
    } else {
        confirm(" Vous devez remplir tous les champs pour etre en mesure de crée un contact")
        button.style.backgroundColor = "rgb(85, 85, 85)";
    }
};

function renit() {
    document.querySelector('form').reset();
    erreur.innerHTML = "";
    form.style.border = "1px solid rgb(179, 177, 177)";
};

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
    <div id='contenaire--resp'>
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
    })
    document.querySelector('form').reset();
    setContacts(listContact);
};

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
    fileUrl = listContact[indexContact].image;
    idEditedContact = indexContact;
};

btnAnnuler.onclick = function () {
    btnEdit.hidden = true;
    button.hidden = false;
    btnAnnuler.hidden = true;
    btnRenit.hidden = false;
    document.querySelector('form').reset();
}

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
    setContacts(listContact)
    afficherContacts();
}

function suprimeContact(indexContact) {
    if (confirm("Etes vous sur de vouloir supprimer ce contact ? ")) {
        listContact.splice(indexContact, 1);
        afficherContacts()
    }
}

function setContacts(data) {
    localStorage.setItem("data", JSON.stringify(data));
}
function getContacts() {
    // localStorage.clear()
    let storage = localStorage.getItem("data");
    return storage ? JSON.parse(storage) : [];
}