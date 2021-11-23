let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");

let eur = 4.58;
let usd = 3.96;
let aud = 2.93;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "eur":
            result = plnElement.value / eur;
            break;

        case "usd":
            result = plnElement.value / usd;
            break;

        case "aud":
            result = plnElement.value / aud;
            break;
    }

    resultElement.innerText = result.toFixed(2);
}
);