// section image a ne pas supprimer!!
const img = document.getElementById("image")
img.style.opacity = 0;

// section telephone

const info = document.querySelector(".alert-info");

function process(event) {
    event.preventDefault();

    const phoneNumber = phoneInput.getNumber();
    alert(phoneNumber)
    alert(typeof phoneNumber)
    if (typeof phoneNumber == "number" || phoneNumber.length == 10) {
        if ((phoneNumber[3] == 9 || phoneNumber[3] == 9) && (phoneNumber[4] == 2 || phoneNumber[4] == 4 || phoneNumber[4] == 7 || phoneNumber[4] == 8 || phoneNumber[4] == 9)) {
            info.style.display = "";
            alert(typeof phoneNumber)
            info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`
        }
    }
    else {
        info.style.display = "";
        info.innerHTML = `ecrivez un bon num <strong></strong>`

    }
}



