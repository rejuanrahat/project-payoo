document.getElementById("cashout-btn").addEventListener("click", function () {

    // 1- get the agent number [& validate]

    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    if (cashoutNumber.length !== 11){
        alert("Invalid agent number! Please enter a valid 11-digit agent number.");
        return;
    }

    // 2- get the amount, [validate, convart to number]

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = parseFloat(cashoutAmountInput.value);

    // 3- get the current balance [, validate, convart to number]

    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;

    // 4- calculate the new balance

    const newBalance = Number(balance) - Number(cashoutAmount);

    if(newBalance < 0) {
        alert("Insufficient balance! Your current balance is " + balance);
        return;
    }
    // 5- get the pin, validate

    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "6251") {

        // 5.1- true => alert> cashout successful! new balance is
        alert("Cashout successful! Your new balance is " + newBalance);
        balanceElement.innerText = newBalance;
    }

    else {
        // 5.1- false => alert> invalid pin! return to home page
        alert("Invalid pin! Please try again.");
        return;
    }
});
