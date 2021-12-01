{

    const calculateResult = (amount, currency) => {
        const eur = 4.58;
        const usd = 3.96;
        const aud = 2.93;

        switch (currency) {
            case "eur":
                return amount / eur;

            case "usd":
                return amonut / usd;

            case "aud":
                return amount / aud;
        }
    };

    const UpdatedResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const amount = plnElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        UpdatedResultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}