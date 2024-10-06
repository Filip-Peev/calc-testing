function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        let result = new Function('return ' + display)(); // safer evaluation
        document.getElementById('display').value = result;

        // Append the calculation to the history
        let history = document.getElementById('history');
        history.value += `${display} = ${result}\n`; // Log the calculation
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}