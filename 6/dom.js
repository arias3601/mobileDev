function runFunctions(){
  CE(); AC(); IB(); RC();
}
//CREATE ELEMENT
function CE(){
  //Happy Create Element
  var createPar = document.createElement("p");
  //NASTY
  //Null value - Makes a tag called null
  var createNull = document.createElement(null);
  //True value - Makes a tag called true
  var createTrue = document.createElement(true);
  //Zero value - Fails, throws an error and fails to create anything
  try {
    var createZero = document.createElement(0);
  }
  catch(error){
    console.log(error);
  }
  //Empyy String value - Fails, throws an error and fails to create anything
  try {
  var createEmpty = document.createElement("");
  }
  catch(error){
    console.log(error);
  }
  console.log(createPar, createNull, createTrue);
}









//Append Child
function AC(){
  var createPar = document.createElement("p");
  var text = document.createTextNode("Hello World");
  //Happy Path
  createPar.appendChild(text);
  console.log(createPar);
  //NASTY
  //Having text inside of it than a variable - ERROR
  try {
  createPar.appendChild("Hello World!");
  }
  catch(error){
    console.log(error);
  }
  //What if it was NULL - ERROR
  try {
  createPar.appendChild(null);
  }
  catch(error){
    console.log(error);
  }
//What if it was empty - ERROR
try {
createPar.appendChild();
console.log(createPar);
}
catch(error){
  console.log(error);
}
//What if ther were multiple variables passed? - Only displays the first one
var createPar2 = document.createElement("p");
var text2 = document.createTextNode("Hello World");
var text3 = document.createTextNode("Goodbye");
createPar2.appendChild(text3, text2);
console.log(createPar2);
}














//Insert Before
function IB() {
var list = document.getElementById("HappyIB");
var createLI = document.createElement("li");
var liText = document.createTextNode("Happy Luke");
createLI.appendChild(liText);
var createLI2 = document.createElement("li");
var liText2 = document.createTextNode("Luke1");
createLI2.appendChild(liText2);
var createLI3 = document.createElement("li");
var liText3 = document.createTextNode("Luke2");
createLI3.appendChild(liText3);
var createLI4 = document.createElement("li");
var liText4 = document.createTextNode("Luke3");
createLI4.appendChild(liText4);
var createLI5 = document.createElement("li");
var liText5 = document.createTextNode("Luke4");
createLI5.appendChild(liText5);



//Happy Path
list.insertBefore(createLI, list.childNodes[5]);
//NASTY
// What if it is a -1 node - Adds it at the end
list.insertBefore(createLI2, list.childNodes[-1]);
//Null in the number spot  - Adds it at the end
list.insertBefore(createLI3, list.childNodes[null]);
//What if it was true  - Adds it at the end
list.insertBefore(createLI4, list.childNodes[true]);
//Don't define where - Dosn't work needs 2 arguments
try {
list.insertBefore(createLI5);
}
catch(error){
  console.log(error);
}
//Define 3 arguments - Displays only the first one, ignores the second
list.insertBefore(createLI5, list.childNodes[3], list.childNodes[5]);
console.log(list);
}












//REMOVE CHILD
function RC(){
  var RClist = document.getElementById("RC");
  //HAPPY PATH
  //removes last Item on list
  RClist.removeChild(RClist.lastChild);
  RClist.removeChild(RClist.lastChild);
  //removes first Item on list
  RClist.removeChild(RClist.firstChild);
  RClist.removeChild(RClist.firstChild);

  //NASTY PATH
  //What if it said a random word instead of a number or positon - ERROR cant find the spot
  try {
    RClist.removeChild(RClist.Luke1);
  }
  catch(error){
    console.log(error);
  }

  //What if it tries to remove null?  - ERROR cant find the spot
  try {
  RClist.removeChild(RClist.null);
  }
  catch(error){
    console.log(error);
  }

  //What if it is empty? - ERROR no paramiters
  try {
  RClist.removeChild();
  }
  catch(error){
    console.log(error);
  }
  console.log(RClist);
}








//
