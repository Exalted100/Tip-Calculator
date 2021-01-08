//function to calculate tip
function calculate() {
    let billAmount = document.getElementById("bill").value;
    let persons = document.getElementById("persons").value;
    let satisfaction = document.getElementById("satisfaction").value;

    if (billAmount === "") {
        return window.alert("Enter your bill to get this baby running")
    }

    if (persons === "" || persons <= 1) {
        persons = 1;
    }

    let tip = Math.round((billAmount * satisfaction) / persons);

    while ( tip % 10 !== 0) {
        tip++;
    }

    if (persons > 1) {
    document.getElementById("result").innerHTML = "Each person should tip NGN" + tip;
    } else {
        document.getElementById("result").innerHTML = "You should tip NGN" + tip;
    }
}

document.getElementById("button").onclick = function() {calculate()};
document.getElementById("form").onsubmit = function(event) { event.preventDefault(); }