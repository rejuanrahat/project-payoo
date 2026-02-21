document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1- get the bank name [& validate]

    const bankAcount = getValueFromInput("add-money-bank");
    if (bankAcount === "Select a Bank") {
        alert("Please select a bank!");
        return;
    }

    // 2- get the account number [& validate]

    const accno = getValueFromInput("add-money-number");
    if (accno.length !== 11) {
        alert("Invalid account number! Please enter a valid 11-digit account number.");
        return;
    }

    // 3- get the amount, [validate, convart to number]

    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if (pin === "6251") {
        alert(`Money added successfully! 
            from ${bankAcount} account. 
            at ${new Date().toLocaleTimeString()} 
            Your new balance is ${newBalance}`);
        setBalance(newBalance);
    }
    else {
        alert("Invalid pin! Please try again.");
        return;
    }
})