
const btnLogin = document.querySelector(".pulsante-genera");
const inputKmElement = document.querySelector("[name='km']");
const inputUserAge = document.querySelector("[name='age']");




btnLogin.addEventListener("click", function () {
    const chilometers = inputKmElement.value;
    const prezzoFinale = ((inputKmElement.value) * 0.21);
    const ageUser = inputUserAge.value;
    const discount18 = ((prezzoFinale * 20) / 100);
    const discount65 = ((prezzoFinale * 40) / 100);
    const totale18 = (prezzoFinale - discount18);
    const totale65 = (prezzoFinale - discount65);

    if (ageUser <= 18) {
        console.log(Math.round((discount18 + Number.EPSILON) * 100) / 100) + "€";
        console.log(Math.round((totale18 + Number.EPSILON) * 100) / 100) + "€";
        console.log("Complimenti! hai uno sconto del 20% riservato ai minorenni!")
    }
    else if (ageUser >= 65) {
        console.log(Math.round((discount65 + Number.EPSILON) * 100) / 100) + "€";
        console.log(Math.round((totale65 + Number.EPSILON) * 100) / 100) + "€";
        console.log("Complimenti! hai uno sconto del 40% riservato agli over 65 anni!");
    }

    else {
        console.log("ci dispiace non c'è uno sconto disponibile per te");
        console.log(Math.round((prezzoFinale + Number.EPSILON) * 100) / 100) + "€";
    }
});