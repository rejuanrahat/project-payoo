document.getElementById("cashout-btn").addEventListener("click", function () {

    // 1- get the agent number [& validate]

        const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length !== 11){
        alert("Invalid agent number! Please enter a valid 11-digit agent number.");
    }

    // 2- get the amount, [validate, convart to number]

    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3- get the current balance [, validate, convart to number];

    const currentBalance = getBalance();

    // 4- calculate the new balance

    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0) {
        alert("Insufficient balance! Your current balance is " + balance);
        return;
    }
    // 5- get the pin, validate

    const pin = getValueFromInput("cashout-pin");
    if (pin === "6251") {

        // 5.1- true => alert> cashout successful! new balance is
        alert("Cashout successful! Your new balance is " + newBalance);
        setBalance(newBalance);
    }

    else {
        // 5.1- false => alert> invalid pin! return to home page
        alert("Invalid pin! Please try again.");
        return;
    }
});
