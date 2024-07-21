// script.js

let equation = "";

function appendNumber(number) {
    equation += number;
    document.getElementById("equation").value = equation;
}

function appendOperator(operator) {
    equation += operator;
    document.getElementById("equation").value = equation;
}

function deleteLast() {
    equation = equation.slice(0, -1);
    document.getElementById("equation").value = equation;
}

function clearDisplay() {
    equation = "";
    document.getElementById("equation").value = equation;
}

function calculate() {
    try {
        let result = eval(equation);
        document.getElementById("equation").value = result;
        equation = result;
    } catch (error) {
        document.getElementById("equation").value = "Error";
        equation = "";
    }
}
