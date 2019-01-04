function insert(num) {
    document.calculator.display.value = document.calculator.display.value + num;
}

function equal() {
  var exp = document.calculator.display.value;
  if(exp) {
    document.calculator.display.value = eval(exp);
  }
  if(document.calculator.display.value === "Infinity") {
    document.calculator.display.value = "Error";
  }
  if(document.calculator.display.value === "undefined") {
    document.calculator.display.value = "Error";
  }
}

function clean() {
  document.calculator.display.value = "";
}

function negation() {
  document.calculator.display.value = document.calculator.display.value * -1;
}

function percentage() {
  document.calculator.display.value = document.calculator.display.value / 100;
}
