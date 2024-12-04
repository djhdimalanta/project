function calculatePayroll() {
    const name = document.getElementById("name").value;
    const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);

    const errorDiv = document.getElementById("error");
    const resultsDiv = document.getElementById("results");

    errorDiv.innerHTML = "";
    resultsDiv.innerHTML = "";

    if (!name || isNaN(hoursWorked) || isNaN(hourlyRate) || isNaN(taxRate) || hoursWorked < 0 || hourlyRate < 0 || taxRate < 0 || taxRate > 100) {
        errorDiv.textContent = "Please enter valid inputs for all fields.";
        return;
    }

    // Calculate gross pay, tax amount, and net pay
    const grossPay = hoursWorked * hourlyRate;
    const taxAmount = (taxRate / 100) * grossPay;
    const netPay = grossPay - taxAmount;

    // Display results
    resultsDiv.innerHTML = `
        <p><strong>Employee Name:</strong> ${name}</p>
        <p><strong>Gross Pay:</strong> $${grossPay.toFixed(2)}</p>
        <p><strong>Tax Amount:</strong> $${taxAmount.toFixed(2)}</p>
        <p><strong>Net Pay:</strong> $${netPay.toFixed(2)}</p>
    `;
}