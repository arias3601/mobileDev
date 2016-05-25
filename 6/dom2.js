function HapCE(){
  var createPar = document.createElement("p");
  var text = document.createTextNode("I am a new paragraph!");
  createPar.appendChild(text);
  document.getElementById("HappyCE").appendChild(createPar);
}

//inserting a canvas in
function NastyCE1(){
  var createPar = document.createElement("canvas");
  var text = document.createTextNode("I am a new paragraph!");
  createPar.appendChild(text);
  document.getElementById("NastyCE").appendChild(createPar);
}

//Adding a head in the middle of the body and the title
function NastyCE2(){
  var createPar = document.createElement("head");
  var createTitle = document.createElement("title");
  var text = document.createTextNode("How did I get here!");
  createTitle.appendChild(text);
  createPar.appendChild(createTitle);
  document.getElementById("NastyCE").appendChild(createPar);
}


//Appending Null
function NastyAC1(){
  var createPar = document.createElement("p");
  var text = document.createTextNode(null);
  createPar.appendChild(text);
  document.getElementById("NastyAC").appendChild(createPar);
}

//Only putting in the tag without any text
function NastyAC2(){
  var createPar = document.createElement("p");
  var text = document.createTextNode("I am a new paragraph!");
  document.getElementById("NastyAC").appendChild(createPar);
}




function HapIB(){
  var createLI = document.createElement("li");
  var liText = document.createTextNode("Luke");
  createLI.appendChild(liText);

  var list = document.getElementById("HappyIB");
  list.insertBefore(createLI, list.childNodes[5]);
}




function HapRC(){
  var list = document.getElementById("HappyIB");
  if (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
}
function HapRC2(){
  var list = document.getElementById("HappyIB");
  if (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function HapRC3(){
  var list = document.getElementById("HappyIB");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}



// What if it is a -1 node
function NastyIB1(){
  var createLI = document.createElement("li");
  var liText = document.createTextNode("Luke");
  createLI.appendChild(liText);

  var list = document.getElementById("NastyIB");
  list.insertBefore(createLI, list.childNodes[-1]);
}

//Null in the number spot
function NastyIB2(){
  var createLI = document.createElement("li");
  var liText = document.createTextNode("Luke");
  createLI.appendChild(liText);

  var list = document.getElementById("NastyIB");
  list.insertBefore(createLI, list.childNodes[null]);
}

//What if it was true
function NastyIB3(){
  var createLI = document.createElement("li");
  var liText = document.createTextNode("Luke");
  createLI.appendChild(liText);

  var list = document.getElementById("NastyIB");
  list.insertBefore(createLI, list.childNodes[true]);
}

//What if it said a random word instead of a number or positon
function NastyRC1(){
  var list = document.getElementById("NastyIB");
  if (list.hasChildNodes()) {
    list.removeChild(list.helloWorld);
  }
}
//WHat if it tries to remove null?
function NastyRC2(){
  var list = document.getElementById("NastyIB");
  if (list.hasChildNodes()) {
    list.removeChild(list.null);
  }
}
//WHat if it is empty?
function NastyRC3(){
  var list = document.getElementById("NastyIB");
  if (list.hasChildNodes()) {
    list.removeChild();
  }
}


//
