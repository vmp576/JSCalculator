/**
 * This helper function will divide 2 operands and give the result or an error
 * @param {*} arrayOperands - array of 2 numbers that will be divided
 * @returns {string|number} - the error string or the result of dividing 2 operands
 */
 const divideOperation = (arrayOperands) => {
    if (arrayOperands[1] === 0){
        return "Error: Cannot divide by 0";
    }
    return arrayOperands[0]/arrayOperands[1];
}

/**
 * This helper function will multiply 2 operands
 * @param {array [number]} arrayOperands - array of 2 numbers that will be multiplied
 * @returns {number} - the result of multiplying 2 operands
 */
const multiplyOperation = (arrayOperands) => {
    return arrayOperands[0]*arrayOperands[1];
}

/**
 * This helper function will subtract 2 operands
 * @param {array [number]} arrayOperands - array of 2 numbers that will be subtracted
 * @returns {number} - the result of subtracting 2 operands
 */
const subtractOperation = (arrayOperands) => {
    return arrayOperands[0]-arrayOperands[1];
}

/**
 * This helper function will add 2 operands
 * @param {array [number]} arrayOperands - array of 2 numbers that will be added
 * @returns {number} - the result of adding 2 operands
 */
const addOperation = (arrayOperands) => {
    return arrayOperands[0]+arrayOperands[1];
}

/**
 * This helper function will find the result of an operand to another operand's power
 * @param {array [number]} arrayOperands - array of 2 numbers that will be used
 * @returns {number} - the result of operand1 to the operand2's power
 */
const powerOperation = (arrayOperands) => {
    return Math.pow(arrayOperands[0], arrayOperands[1]);
}

/**
 * This helper function will find the square root of an operand
 * @param {array [number]} arrayOperands - array of 2 numbers that will be used
 * @returns {string|number} - the error string or the result of the square root of operand1
 */
const sqrtOperation = (arrayOperands) => {
    if (arrayOperands[0] < 0){
        return "Error: Operand 1 Must Be Greater Than 0";
    }
    return Math.sqrt(arrayOperands[0]);
}

/**
 * This helper function will read the current values of the input operands
 * @returns {array [number]} - Array of numbers obtained from the input elements
 */
const readCurrentInputs = () => {
    const inputValues = [];
    for (const operand of document.querySelectorAll('input')){
        inputValues.push(Number(operand.value));
    }
    return inputValues;
}

/**
 * This helper function will select the result h1 tag and replace it's inner html with the result string/number
 * @param {string|number} result The result string or number given by a specified operation
 */
const displayResult = (result) => {
    document.querySelector('input.operand1').value = result;
}

/**
 * This helper function will validate an array if its indices contain something that is not a number
 * @param {array [number]} arrayOperands - array of 2 numbers
 * @returns {string|array [number]} - the error of invalid numbers or return the original numbers
 */
const validateNumbers = (arrayOperands) => {
    for (const operand of arrayOperands){
        if (isNaN(operand)){ //https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/#:~:text=In%20JavaScript%2C%20there%20are%20two,a%20string%20named%20%E2%80%9Cnumber%E2%80%9D.
            return "Invalid: Must Use Numbers";
        }
    }
    return arrayOperands;
}

/**
 * This function will activate upon a specified event and perform a specific operation based on the event target's operation
 * @param {event} event 
 */
const performSelectedOperation = (event) => {
    const inputValues = validateNumbers(readCurrentInputs());
    if (inputValues === "Invalid: Must Use Numbers"){
        displayResult(inputValues);
        return;
    }
    switch (event.target.innerHTML){
        case "/":
            displayResult(divideOperation(inputValues));
            break;
        case '*':
            displayResult(multiplyOperation(inputValues));
            break;
        case '-':
            displayResult(subtractOperation(inputValues));
            break;
        case '+':
            displayResult(addOperation(inputValues));
            break;
        case '^':
            displayResult(powerOperation(inputValues));
            break;
        case 'sqrt(':
            displayResult(sqrtOperation(inputValues));
            break;
        default:
            displayResult('Error: Case Exception');
            break;
    }
}

/**
 * This function will add event listeners to every button operation
 */
const addEventListeners = () => {
    const buttonOperators = document.querySelectorAll('button');
    for (const button of buttonOperators){
        button.addEventListener('click', performSelectedOperation);
    }
}
addEventListeners();