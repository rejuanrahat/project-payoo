document.getElementById("login-btn").addEventListener("click", function() {
    // 1- get the mobile number input

    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // 2- get the pin 

    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin);

    // 3- match the mobile number and pin

    if (contactNumber === "01814830056" && pin === "6251") {

    // 3.1- true => alart> home page
        alert("Login successful! welcome to Payoo.");

    // 3.1- false => alart> return to login page

    } else {
        alert("Invalid mobile number or pin!");
        return;
    }
});