function insert(num) {
    document.calculator.display.value = document.calculator.display.value + num;
}

function equal() {
  var exp = document.calculator.display.value;
  if(exp) {
    document.calculator.display.value = eval(exp);
  }
}

function clean() {
  document.calculator.display.value = "";
}
