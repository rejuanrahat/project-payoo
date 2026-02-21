// Mashine id => input value 

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//Mashine => balance

function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

// Mashine value => stt balance

function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// Mashine id => hide all => show id

function showOnly(id) {
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("Cashout");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    const selected =  document.getElementById(id);
    selected.classList.remove("hidden");
}