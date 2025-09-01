let number1, number2, number3, n1, n2, n3, sum, product, avg, min, max;

function calculate() {
    number1 = document.forms["input"].elements["num1"].value;
    number2 = document.forms["input"].elements["num2"].value;
    number3 = document.forms["input"].elements["num3"].value;
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);
  
    sum = n1 + n2 + n3;
    product = n1 * n2 * n3;
    avg = sum / 3;
    min = Math.min(n1, n2, n3);
    max = Math.max(n1, n2, n3);

        if(Number.isNaN(sum)) {
        document.getElementById("result").innerHTML = "Please type a valid integer!";
        } else {
            document.getElementById("result").innerHTML = "Sum: " +sum+ "\nProduct: " +product + "\nAverage: " + avg + "\nLargest: " + max + "\nSmallest: " + min;
        }
}