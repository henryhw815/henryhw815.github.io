let hw, mid, fin, parti, total, letter;

function validCheck(num) {
    return(!Number.isNaN(num) && num <= 100 && num >= 0);
}

function gradeCalc() {
    hw = Math.round(parseInt(document.forms["input"].elements["hwscore"].value));
    mid = Math.round(parseInt(document.forms["input"].elements["midscore"].value));
    fin = Math.round(parseInt(document.forms["input"].elements["finscore"].value));
    parti = Math.round(parseInt(document.forms["input"].elements["pscore"].value));

    if(validCheck(hw) == true && validCheck(mid) == true && validCheck(fin) == true && validCheck(parti) == true) {
        total = Math.round((0.5 * hw) + (0.2 * mid) + (0.2 * fin) + (0.1 * parti));
            if(100 >= total && total >= 90) {
                letter = "A";
            } else if(89 >= total && total >= 80) {
                letter = "B";
            } else if(79 >= total && total >= 70) {
                letter = "C";
            } else if (69 >= total || total >= 60) {
                letter = "D (Student must retake course)";
            } else if (59 >= total) {
                letter ="F (Student must retake course)";
            } else {
                document.getElementById("result").innerHTML = "Please type a valid integer (0-100) for all boxes!";
            }
            document.getElementById("result").innerHTML = "Final score: " + total + "\nFinal grade: " + letter;
    } else {
                document.getElementById("result").innerHTML = "Please type a valid integer (0-100) for all boxes!";
    }
}
