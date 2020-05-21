var firstNum = "0";
var secondNum = "";
var result;
var curFunc;

/**
 * Initializes the calculator screen and adds an event listener
 * to the equals button
 */
var init = function() {
    document.getElementById("res").innerText = firstNum;
    document.getElementById("eqls").addEventListener("click", function() {
        performOperation();
    });
}

/**
 * Updates the calculator screen with a provided number or string
 * @param {Number} res The number to display on the calculator screen
 */
var updateResult = function(res) {
    result = res.toString();
    document.getElementById("res").innerText = result;
}

/**
 * Appends a number to the end of what is currently on the calculator
 * screen. Useful for when punching in digits
 * @param {Number} num The number to append
 */
var addToNum = function(num) {
    if (curFunc) {
        secondNum += num;
        updateResult(secondNum);
        return;
    }
    if (firstNum.length == 1 && firstNum[0] == "0" && num == "0") {
        firstNum[0] = num;
        updateResult(firstNum);
    }
    else {
        if (firstNum == "0") {
            firstNum = "";
        }
        firstNum += num;
        updateResult(firstNum);
    }
}

/**
 * Negates the value displayed on the calculator screen
 */
var negate = function () {
    if (curFunc) {
        secondNum = secondNum * -1;
        updateResult(secondNum);
        return;
    }
    if (result) {
        result = result * - 1;
        updateResult(result);
        return;
    }
    else {
        firstNum = firstNum * -1;
        updateResult(firstNum);
    }
}

/**
 * Clears the current entry on the calculator screen
 */
var clearEntry = function() {
    if (curFunc) {
        secondNum = "";
        result = "";
        updateResult("0");
    }
    else {
        firstNum = "0";
        updateResult(firstNum);
    }
}

/**
 * Clears an entire calculation from the calculator
 */
var clr = function() {
    firstNum = "0";
    secondNum = "";
    result = "";
    curFunc = undefined;
    updateResult(firstNum);
}

/**
 * Performs the sum, subtraction, multiplication, or division of two specified
 * operands, updating the screen after the calculation
 */
var performOperation = function() {
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);

    switch(curFunc) {
        case '+':
            updateResult(firstNum + secondNum);
            break;
        case '-':
            updateResult(firstNum - secondNum);
            break;
        case '*':
            updateResult(firstNum * secondNum);
            break;
        case '/':
            updateResult(firstNum / secondNum);
            break;
        default:
            // Do nothing
    }
    updateFunc(undefined);
    firstNum = "0";
    secondNum = "";
}

/**
 * Stores the chosen operation to be performed on the
 * operands
 * @param {String} func The chosen operation (+, -, *, /)
 */
var updateFunc = function(func) {
    if (result) {
        firstNum = result;
    }
    curFunc = func;
}

