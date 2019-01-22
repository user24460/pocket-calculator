//variables defined (global scope)
var exec = false;
var expressArray= [];
var decimalStat = false; decimalInsert = false;
var symStat = false; finalSym = false;
var opInsert = false;
var firstPercent = false;
var firstNegate = false;
var expon;

//allows for numerical values and math operators to be inserted in display
function insert(num){
  if(exec == false){
  document.calculator.display.value = "";
  exec = true;
}

//disregards first math operator if user clicks on another math operator
if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expressArray[expressArray.length - 1] == '+' || expressArray[expressArray.length - 1] == '-' || expressArray[expressArray.length -1] == '*' || expressArray[expressArray.length - 1] == '/'){
    expressArray.pop();
    expressArray.push(num);
    opInsert = true;
  }
}

if(opInsert == false){
  document.calculator.display.value = document.calculator.display.value + num;
  expressArray.push(num);
}

//limits input to 999,999,999 by disabling numerical buttons
if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementById("buttonZero").disabled = true;
    document.getElementById("buttonOne").disabled = true;
    document.getElementById("buttonTwo").disabled = true;
    document.getElementById("buttonThree").disabled = true;
    document.getElementById("buttonFour").disabled = true;
    document.getElementById("buttonFive").disabled = true;
    document.getElementById("buttonSix").disabled = true;
    document.getElementById("buttonSeven").disabled = true;
    document.getElementById("buttonEight").disabled = true;
    document.getElementById("buttonNine").disabled = true;
    document.getElementById("buttonDecimal").disabled = true;
}

//combines numerical arrays for comma delimitation
if(decimalInsert == false){
 let commaDelimit = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
 document.calculator.display.value = commaDelimit;
  }
}

//sets default display value to 0
var i = 7;
function clean(){
  finalSym = false;
  opInsert = false;
  document.calculator.display.value=0;
  i = i = 7;
  exec = false;
  decimalStat = false;
  decimalInsert = false;
  firstNegate = false;
    expressArray = [];
    document.getElementById("buttonZero").disabled = false;
    document.getElementById("buttonOne").disabled = false;
    document.getElementById("buttonTwo").disabled = false;
    document.getElementById("buttonThree").disabled = false;
    document.getElementById("buttonFour").disabled = false;
    document.getElementById("buttonFive").disabled = false;
    document.getElementById("buttonSix").disabled = false;
    document.getElementById("buttonSeven").disabled = false;
    document.getElementById("buttonEight").disabled = false;
    document.getElementById("buttonNine").disabled = false;
    document.getElementById("buttonDecimal").disabled = false;
}

//clears calculator display and disables numerical buttons after a math operator is clicked
//sets default display value to 0
function clearOperation(){
  opInsert = false;
  i = i = 7;
  symStat = false;
  firstPercent = false;
  document.calculator.display.value = 0;
  exec = false;
  decimalStat = false;
  decimalInsert = false;
  firstNegate = true;
  document.getElementById("buttonZero").disabled = false;
  document.getElementById("buttonOne").disabled = false;
  document.getElementById("buttonTwo").disabled = false;
  document.getElementById("buttonThree").disabled = false;
  document.getElementById("buttonFour").disabled = false;
  document.getElementById("buttonFive").disabled = false;
  document.getElementById("buttonSix").disabled = false;
  document.getElementById("buttonSeven").disabled = false;
  document.getElementById("buttonEight").disabled = false;
  document.getElementById("buttonNine").disabled = false;
  document.getElementById("buttonDecimal").disabled = false;
}

//clears calculator display and disables numerical buttons after the = button is clicked
function equal(){
  symStat = false;
  firstPercent = false;
  finalSym = true;
  document.getElementById("buttonZero").disabled = true;
  document.getElementById("buttonOne").disabled = true;
  document.getElementById("buttonTwo").disabled = true;
  document.getElementById("buttonThree").disabled = true;
  document.getElementById("buttonFour").disabled = true;
  document.getElementById("buttonFive").disabled = true;
  document.getElementById("buttonSix").disabled = true;
  document.getElementById("buttonSeven").disabled = true;
  document.getElementById("buttonEight").disabled = true;
  document.getElementById("buttonNine").disabled = true;
  document.getElementById("buttonDecimal").disabled = true;

  //specifies scientific notation format
  let computResult = eval(expressArray.join(''));
  if(expressArray.join(",").includes("e")){
     expon = true;
  }
    expressArray = [];
    expressArray.push(computResult);

  //makes computational results scientific notation if they exceed 999,999,999
  if(computResult > 999999999 || computResult < -999999999){
    document.calculator.display.value = computResult.toExponential(9);
  }else{
    document.calculator.display.value = computResult.toLocaleString("en");
  }
  if(expon == true){
    document.calculator.display.value = computResult;
  }

  //replaces computational results Infinity, NaN, and ∞ with Computational Error
  if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "NaN" || document.calculator.display.value === "∞") {
    document.calculator.display.value = "Computational Error";
  }
}

//negation function
function negation(){
  let negation = 1;
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  document.calculator.display.value = Number(document.calculator.display.value) * -1;
  document.calculator.display.value = Number(document.calculator.display.value).toLocaleString("en");
  document.calculator.display.value = "(" + document.calculator.display.value + ")";

  //multiplies computational results/numbers in array by -1
  let negationNum = expressArray * -1;
  expressArray[expressArray.length-1] = (String(expressArray[expressArray.length-1]));

  //pushes the - symbol into expressArray
  expressArray.unshift("-");
  decimalInsert = true;
  decimalStat = true;

  //disables all buttons after negation
  document.getElementById("buttonDecimal").disabled = true;
  document.getElementById("buttonZero").disabled = true;
  document.getElementById("buttonOne").disabled = true;
  document.getElementById("buttonTwo").disabled = true;
  document.getElementById("buttonThree").disabled = true;
  document.getElementById("buttonFour").disabled = true;
  document.getElementById("buttonFive").disabled = true;
  document.getElementById("buttonSix").disabled = true;
  document.getElementById("buttonSeven").disabled = true;
  document.getElementById("buttonEight").disabled = true;
  document.getElementById("buttonNine").disabled = true;
}

//percentage function; divides numerical values and/or computational results by 100
function percentage(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let counter = document.calculator.display.value.length;
  counter = counter -1;
  let remove = expressArray.length - counter;
  while(expressArray.length >= remove){
  expressArray.pop();
  }
  document.calculator.display.value = Number(document.calculator.display.value) / 100;
  expressArray[remove] = document.calculator.display.value;
  firstPercent = true;
}else{
  let counter2 = document.calculator.display.value.length;
  counter2 = counter2 - i;
  let removeAmount = expressArray.length - counter2;
  expressArray.splice(expressArray.length -1);
  document.calculator.display.value = document.calculator.display.value / 100;
  expressArray.push(document.calculator.display.value);
  if(document.calculator.display.valu >= 0.9999999){
    let expon= Number(document.calculator.display.value);
    document.calculator.display.value = expon.toExponential(9);
  }
  }
}else{
  document.calculator.display.value = document.calculator.display.value / 100;
  expressArray = [];
  expressArray.push(document.calculator.display.value);
  let expon = Number(document.calculator.display.value);
  if(document.calculator.display.value>= 0.9999999){
  document.calculator.display.value = expon.toExponential(9);
    }
  }
}

//inserting a decimal point function
function decimal(num){
  if(decimalStat == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressArray.push(num);
    decimalStat = true;
    decimalInsert = true;
  }
}
