var tip = 1;

function f1() {
    var bill = parseInt(document.getElementById("bill").value);
    var people = parseInt(document.getElementById("people").value);
    tip = .15;
    
    var billTip = bill * tip;
    var finalAmt = billTip + bill;
    console.log(bill, tip, billTip, finalAmt);
    var perPersonTotal = finalAmt / people;
    var perPersonTip = billTip / people;

    document.getElementById("total-tip").innerHTML = "$ " + billTip.toFixed(2);
    document.getElementById("total-amt").innerHTML = "$ " + finalAmt.toFixed(2);
    document.getElementById("per-person").innerHTML = "$ " + perPersonTotal.toFixed(2);
    document.getElementById("per-person-tip").innerHTML = "$ " + perPersonTip.toFixed(2);
}


