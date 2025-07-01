let answerField = document.getElementById("Answer");

function EnterNumber(val) {
    answerField.value += val;
}

function EnterOperator(op) {
    answerField.value += op;
}

function EnterEqual() {
    try {
        answerField.value = eval(answerField.value);
    } catch {
        answerField.value = "Error";
    }
}

function EnterClear() {
    answerField.value = "";
}
