function calculateResults() {
    let n = parseInt(document.getElementById('number').value);
    
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    // Calculate Factorial using While Loop
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    document.getElementById('factorial-result').innerHTML = `Factorial of ${n} is: ${factorial}`;

    // Calculate Sum using Do-While Loop
    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);
    document.getElementById('sum-result').innerHTML = `Sum of first ${n} natural numbers is: ${sum}`;

    // Calculate Average using For Loop
    let sumForAverage = 0;
    for (let k = 1; k <= n; k++) {
        sumForAverage += k;
    }
    let average = sumForAverage / n;
    document.getElementById('average-result').innerHTML = `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
}