var evaluateString = ''; var lastNumber = true; var lastSymbol = false; var lastEqual = false;

function insert(num) {
  if (lastEqual) {
    clean(); lastEqual = false;
  }

  if (lastNumber) {
    document.calculator.display.value = (document.calculator.display.value + num);
    lastSymbol = true;
  } else {
    document.calculator.display.value = (num);
    lastSymbol = true; lastNumber = true;
  }
  evaluateString = evaluateString + num;
}

function parseSymbol(sym) {
  if (lastSymbol) {
    document.calculator.display.value = (sym);
    lastSymbol = false; lastNumber = false; lastEqual = false; evaluateString = evaluateString + sym;
  }
}

function equal() {
  document.calculator.display.value = eval(evaluateString);
  evaluateString = eval(evaluateString).toLocaleString("en"); lastNumber = false; lastEqual = true;
}

function clean() {
  document.calculator.display.value = ' ';
  evaluateString = ''; lastNumber = true; lastSymbol = false;
}

function negation() {
  document.calculator.display.value = document.calculator.display.value * -1;
}

function percentage() {
  document.calculator.display.value = document.calculator.display.value / 100;
}

// function insert(num) {
//     document.calculator.display.value = document.calculator.display.value + num;
// }
//
// function equal() {
//   var exp = document.calculator.display.value;
//   if(exp) {
//     document.calculator.display.value = eval(exp);
//   }
//   if(document.calculator.display.value === "Infinity") {
//     document.calculator.display.value = "Error";
//   }
//   if(document.calculator.display.value === "undefined") {
//     document.calculator.display.value = "Error";
//   }
// }
// function clean() {
//   document.calculator.display.value = "";
// }
//
// function negation() {
//   document.calculator.display.value = document.calculator.display.value * -1;
// }
//
// function percentage() {
//   document.calculator.display.value = document.calculator.display.value / 100;
// }
