// section image a ne pas supprimer!!
const img = document.getElementById("image")
img.style.opacity = 0;

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

//     }
// }

//Section Email Checking

var email = document.querySelector('#email_checking');


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


//Section image checking



