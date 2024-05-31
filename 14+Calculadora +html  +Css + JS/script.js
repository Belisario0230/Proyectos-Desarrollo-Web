let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function addOperator(operator) {
    if (displayValue !== '') {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    if (displayValue !== '') {
        try {
            displayValue = eval(displayValue);
            document.getElementById('display').value = displayValue;
        } catch (error) {
            alert('Error en la expresión');
        }
    }
}
