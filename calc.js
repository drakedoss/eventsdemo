var firstNum = "0";
var secondNum = "";
var result;
var curFunc;

var init = function() {
    document.getElementById("res").innerText = firstNum;
    document.getElementById("eqls").addEventListener("click", function() {
        performOperation();
    });
}

var updateResult = function(res) {
    result = res.toString();
    document.getElementById("res").innerText = result;
}

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

var clr = function() {
    firstNum = "0";
    secondNum = "";
    result = "";
    curFunc = undefined;
    updateResult(firstNum);
}

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

var updateFunc = function(func) {
    if (result) {
        firstNum = result;
    }
    curFunc = func;
}

