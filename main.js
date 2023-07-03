
const btnLogin = document.querySelector(".pulsante-genera");
const inputKmElement = document.querySelector("[name='km']");
const inputUserAge = document.querySelector("[name='age']");
const inputName = document.querySelector("[name='inputName']");
const btnReset = document.querySelector(".pulsante-reset");



btnLogin.addEventListener("click", function () {
    const chilometers = inputKmElement.value;
    const prezzoFinale = ((inputKmElement.value) * 0.21);
    const ageUser = inputUserAge.value;
    const discount18 = ((prezzoFinale * 20) / 100);
    const discount65 = ((prezzoFinale * 40) / 100);
    const totale18 = (prezzoFinale - discount18);
    const totale65 = (prezzoFinale - discount65);
    const insertName = inputName.value;
    const min = 1;
    const max = 10;
    const finalNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const numRandom = Math.random();



    if (ageUser <= 18) {
        document.getElementById("ticketType").innerHTML = ("Sonto del 20%");
        document.getElementById("prezzo-finale").innerHTML = (Math.round((totale18 + Number.EPSILON) * 100) / 100) + "€";
        document.getElementById("carrozza").innerHTML = (`Numero tra ${min} e ${max}`, finalNum);
        document.getElementById("userName").innerHTML = insertName;
        document.getElementById("code").innerHTML = (Math.round(numRandom * 5000));
    }
    else if (ageUser >= 65) {
        document.getElementById("ticketType").innerHTML = ("sconto del 65%");
        document.getElementById("prezzo-finale").innerHTML = (Math.round((totale65 + Number.EPSILON) * 100) / 100) + "€";
        document.getElementById("userName").innerHTML = insertName;
        document.getElementById("code").innerHTML = (Math.round(numRandom * 5000));
        document.getElementById("carrozza").innerHTML = (`Numero tra ${min} e ${max}`, finalNum);
    }

    else {
        document.getElementById("ticketType").innerHTML = ("Nessun'offerta disponibile");
        document.getElementById("prezzo-finale").innerHTML = (Math.round((prezzoFinale + Number.EPSILON) * 100) / 100) + "€";
        document.getElementById("userName").innerHTML = insertName;
        document.getElementById("code").innerHTML = (Math.round(numRandom * 5000));
        document.getElementById("carrozza").innerHTML = (`Numero tra ${min} e ${max}`, finalNum);
    }
});

btnReset.addEventListener("click", function () {
    document.getElementById("myForm1").reset();
    document.getElementById("myForm2").reset();
    document.getElementById("myForm3").reset();
    document.getElementById("myForm4").reset();
});


