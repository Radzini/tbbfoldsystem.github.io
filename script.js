document.getElementById('calculateBtn').addEventListener('click', function() {
    const xpInput = parseFloat(document.getElementById('xpInput').value);
    const formula = document.getElementById('formulaSelect').value;
    const resultContainer = document.getElementById('resultContainer');

    if (isNaN(xpInput) || xpInput < 1) {
        resultContainer.textContent = 'Please enter a valid XP value.';
        return;
    }

    // Convert the input to millions
    const xpInMillions = xpInput * 1000000;

    let level;
    if (formula === 'multiply') {
        level = xpInMillions * 0.0001;
    } else if (formula === 'divide') {
        level = xpInMillions / 10000;
    }

    resultContainer.textContent = `Calculated Level: ${level}`;
});
