const exchangeRates = {
    INR: 83.50,
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.35,
    CAD: 1.35,
    AUD: 1.53
};

const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CAD: '$',
    AUD: '$'
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = "Please enter a valid positive amount";
        resultDiv.classList.add('error');
        return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    resultDiv.innerHTML = `${currencySymbols[fromCurrency]}${amount.toFixed(2)} ${fromCurrency} = 
                         ${currencySymbols[toCurrency]}${convertedAmount.toFixed(2)} ${toCurrency}`;
    resultDiv.classList.remove('error');
}
