var evalStr = '';
var lastNum = true; var lastSym = false; var lastEql = false;
function insert(num) {
  if (lastEql) {
    clean(); lastEql = false;
  }
  if (lastNum) {
    document.calculator.display.value = (document.calculator.display.value + num);
    lastSym = true;
  } else {
    document.calculator.display.value = (num);
    lastSym = true; lastNum = true;
  }
  evalStr = evalStr + num;
}
function parseSym(sym) {
  if (lastSym) {
    document.calculator.display.value = (sym);
    lastSym = false; lastNum = false; lastEql = false; evalStr = evalStr + sym;
  }
}
function equal() {
  document.calculator.display.value = eval(evalStr);
  evalStr = eval(evalStr).toLocaleString("en"); lastNum = false; lastEql = true;
}
function clean() {
  document.calculator.display.value = ' ';
  evalStr = ''; lastNum = true; lastSym = false;
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
