var people;
var tip;

function f1() {
    var bill = parseInt(document.getElementById("bill").value);
    var people = parseInt(document.getElementById("people").value);

    
    var billTip = bill * tip;
    var finalAmt = billTip + bill;
    var perPersonTotal = finalAmt / people;
    var perPersonTip = billTip / people;

    document.getElementById("total-tip").innerHTML = "$ " + billTip.toFixed(2);
    document.getElementById("total-amt").innerHTML = "$ " + finalAmt.toFixed(2);
    document.getElementById("per-person").innerHTML = "$ " + perPersonTotal.toFixed(2);
    document.getElementById("per-person-tip").innerHTML = "$ " + perPersonTip.toFixed(2);
}

function tip5() {
    tip = .05;
    f1();
}

function tip10() {
    tip = .10;
    f1();
}

function tip15() {
    tip = .15;
    f1();
}

function tip20() {
    tip = .20;
    f1();
}

function tip25() {
    tip = .25;
    f1();
}

var custom = document.getElementById("custom");
custom.addEventListener("keydown", function(e) {
    if(e.code === "Enter"){
        validate(e);
    }
});


function validate(e) {
    tip = parseInt(document.getElementById("custom").value) / 100;
    f1();
}

function reset() {
    billTip = 0.00;
    finalAmt = 0.00;
    perPersonTotal = 0.00;
    perPersonTip = 0.00;
    document.getElementById("total-tip").innerHTML = "$ " + billTip.toFixed(2);
    document.getElementById("total-amt").innerHTML = "$ " + finalAmt.toFixed(2);
    document.getElementById("per-person").innerHTML = "$ " + perPersonTotal.toFixed(2);
    document.getElementById("per-person-tip").innerHTML = "$ " + perPersonTip.toFixed(2);

}

