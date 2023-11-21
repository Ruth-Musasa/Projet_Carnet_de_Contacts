// gitsection image a ne pas supprimer!!
const img = document.getElementById("image")
img.style.opacity = 0;

// section telephone


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


// boutton créer 

// const submit = document.getElementById("button_color--blue")
// const Rénit = document.getElementById("button_color--red")
// const FormContenaire = document.getElementById("contenaire--formulaire--marges")
// const ContenaireListe = document.getElementById("contenaire--liste")

// submit.onclick = function() {
//   if (FormContenaire.value === ''){
//     erreur.innerHTML = 'Veuillez remplir le formulaire'
//     FormContenaire.classList.add("erreur");
//   }
//   }
//   else{
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     listContenaire.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span)

// }
// inputBox.value = "";
// saveData();
// }

// ContenaireListe.addEventListener("click", function(e){

// if (e.target.tagName === "LI"){

// e.target.classList.toggle("checked");
// saveData();
// }
// else if(e.target.tagName === "SPAN"){
// e.target.parentElement.remove();
// saveData();
// }
// },false)

// function saveData(){

//     localStorage.setItem("data", listContenaire.innerHTML);
// }

// function showTask(){
//     listContenaire.innerHTML = localStorage.getItem("data");
// }
// showTask();
