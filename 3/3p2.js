let qty1, qty2, qty3, qty4, sold, earned;

function validCheck(num) {
    return(!Number.isNaN(num) && num >= 0);
}

function qtyPrint(num1, num2, num3, num4) {
    document.getElementById("qty1").value = num1;
    document.getElementById("qty2").value = num2;
    document.getElementById("qty3").value = num3;
    document.getElementById("qty4").value = num4;
}

function saleCalc() {
    document.getElementById("error").innerHTML = "";
    qty1 = parseInt(document.forms["input"].elements["1ct"].value);
    qty2 = parseInt(document.forms["input"].elements["2ct"].value);
    qty3 = parseInt(document.forms["input"].elements["3ct"].value);
    qty4 = parseInt(document.forms["input"].elements["4ct"].value);

    if(validCheck(qty1) == true && validCheck(qty2) == true && validCheck(qty3) == true && validCheck(qty4) == true) {
        qtyPrint(qty1, qty2, qty3, qty4);
        document.getElementById("total1").value = (qty1 * 20.99).toFixed(2);
        document.getElementById("total2").value = (qty2 * 12.75).toFixed(2);
        document.getElementById("total3").value = (qty3 * 9.95).toFixed(2);
        document.getElementById("total4").value = (qty4 * 35.89).toFixed(2);
        sold = ((qty1 * 20.99) + (qty2 * 12.75) + (qty3 * 9.95) + (qty4 * 35.89)).toFixed(2);
        earned = ((sold * 0.09) + 250).toFixed(2);
        document.getElementById("stotal").value = sold;
        document.getElementById("weektotal").value = earned;
    } else {
        document.getElementById("error").innerHTML = "Please enter valid numbers for all boxes (no negatives!)"
    }
}