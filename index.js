
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

//     }
// }



