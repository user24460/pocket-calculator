var exec = false; decimalStat = false; decimalInsert = false; percent1 = false; symStat = false; opInsert = false; finalSym = false;
var expArray = [];
var i = 7;

function insert(num){
 if(exec == false){
 document.calculator.display.value = "";
 exec = true;
}

if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expArray[expArray.length - 1] == '*' || expArray[expArray.length - 1] == '/' || expArray[expArray.length - 1] == '+' || expArray[expArray.length - 1] == '-'){
    expArray.splice(expArray.length -1 , 1);
    expArray.push(num);
    opInsert = true;
  }
}

if(opInsert == false){
  document.calculator.display.value = document.calculator.display.value + num;
  expArray.push(num);
}

 // expArray.push(num);
 // console.log(expArray.join(''));
 // if (num === ".") {
 //     if (!document.calculator.display.value.includes(".")) {
 //       document.calculator.display.value = document.calculator.display.value + num;
 //     }
 // } else {
 //   document.calculator.display.value = document.calculator.display.value + num;
 // }

 if(Number(document.calculator.display.value.length <= 10)){
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

if(decimalInsert == false){
let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
document.calculator.display.value = commaInput;
  }
}

function clean(){
  lastSym = false;
  operationInsert = false;
 document.calculator.display.value = 0;
 exec = false;
 decStat = false;
 piStatus = false;
 decimalInsert = false;
 i = i = 7;
   expArray = [];
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
   document.getElementById("decimal").disabled = false;
}

function clearOnOp(){
 document.calculator.display.value = 0;
 exec = false;
 decStat = false;
 piStatus = false;
 lastSym = false;
 opInsert = false;
 decimalInserterted = false;
 symStat = false;
 i = i = 7;
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
}

function equal(){
 piStatus = false;
 symStat = false;
 piStatus = false;
 lastSym = true;
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
 let calcAnswer= eval(expArray.join(''));
   expArray = [];
   expArray = [calcAnswer];
 if(calcAnswer > 999999999){
   document.calculator.display.value = calcAnswer.toExponential(9);
 }else{
   document.calculator.display.value=calcAnswer.toLocaleString("en");
 }

 if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "∞") {
   document.calculator.display.value = "ERROR";
 }
}

function negation(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  document.calculator.display.value = document.calculator.display.value * -1;
   document.calculator.display.value = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
   expArray[expArray.length - expArray.length] = expArray[expArray.length - expArray.length] * -1;
   if(document.calculator.display.value === "NaN"){
     document.calculator.display.value = "ERROR";
   }
   decimalInsert = true;
   decStat = true;
  document.getElementById("buttonDecimal").disabled = true;
}

function percentage(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("")

  if(percent1 == false){
    let numberCount = document.calculator.display.value.length
    numberCount = numberCount -1
  let removed = expArray.length - numberCount
  while(expArray.length >= removed){
    expArray.pop();
  }
  document.calculator.display.value = document.calculator.display.value / 100
expArray[removed] = document.calculator.display.value
  percent1 = true;
}else{
  let numberCount2 = document.calculator.display.value.length
  numberCount2 = numberCount2 - 4
  let removed2 = expArray.length - numberCount2
expArray.splice(expArray.length -1)
  document.calculator.display.value = document.calculator.display.value / 100
  expArray[removed2] = document.calculator.display.value
  if(document.calculator.display.value<= 0.9999999){
    let expon= Number(document.calculator.display.value)
    document.calculator.display.value = expon.toExponential(9)
  }
}

}

function decimalInsert(num){
 if(decStat == false){
   document.calculator.display.value = document.calculator.display.value + num;
   expArray.push(num);
   decStat = true;
 }
}
