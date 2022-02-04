var tip = 1;

function f1() {
    var bill = parseInt(document.getElementById("bill").value);
    var people = parseInt(document.getElementById("people").value);
    tip = tipFunc();
    
    var billTip = bill * tip;
    var finalAmt = billTip + bill;
    console.log(bill, tip, billTip, finalAmt);
    var perPerson = finalAmt / people;

    document.getElementById("total-amt").innerHTML = "$ " + finalAmt.toFixed(2);
    document.getElementById("per-person").innerHTML = "$ " + perPerson.toFixed(2);
}

function tipFunc() {

}
