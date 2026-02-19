function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if(amount === "" || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }

    // Simple static conversion rates (for beginners)
    const rates = {
        USD: {INR: 83, EUR: 0.93, GBP: 0.81, USD: 1},
        INR: {USD: 0.012, EUR: 0.011, GBP: 0.0098, INR: 1},
        EUR: {USD: 1.08, INR: 89, GBP: 0.87, EUR: 1},
        GBP: {USD: 1.23, INR: 102, EUR: 1.15, GBP: 1}
    };

    let convertedAmount = amount * rates[from][to];

    document.getElementById("result").innerHTML = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}
