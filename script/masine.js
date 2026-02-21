// Masine id => input value 

function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//Masine => balance

function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

// Masine value => stt balance

function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}