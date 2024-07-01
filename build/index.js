let inputs = document.getElementById("inputs");
function user(character) {
  if (inputs.value === "Undefined!") {
    inputs.value = "";
  }
  inputs.value += character;
}
function clears() {
  inputs.value = "";
}
function percents() {
  let results = inputs.value / 100;
  inputs.value = results;
}
function addDecimal() {
  const lastNum = inputs.value.split(/[\+\-\*\/\(\)]/).pop();
  if (!lastNum.includes(".") && lastNum !== "") {
    user(".");
  }
}
function resulta() {
  const expression = inputs.value;
  const result = eval(expression);
  if (expression.includes("/") && eval(expression.split("/").pop()) === 0) {
    inputs.value = "Undefined!";
  } else {
    inputs.value = result;
  }
}
function negatives() {
  const temp = inputs.value;
  inputs.value = -+temp;
}
