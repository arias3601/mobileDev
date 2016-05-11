// Basic
var team = [
  {"Name":"Asher","Age":20},
  {"Name":"JT","Age":24},
  {"Name":"Bat Man","Age":30},
  {"Name":"Sam","Age":22}
];

document.getElementById("demo").innerHTML = team[0].Name + " is " + team[0].Age;





//parse

//happy

var text = '{"team":[' +
  '{"Name":"Asher","Age":20},' +
  '{"Name":"JT","Age":24},' +
  '{"Name":"Bat Man","Age":30},' +
  '{"Name":"Sam","Age":22}' +
']}';

obj = JSON.parse(text);
document.getElementById("happyParse").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;





//nastyParse
//what if you parse null, what if you parse an empty string. what if you parse "hello world", what if it starts looking like Json but is not json

//HTML injection
var text = '{"team":[' +
 '{"Name":"Asher","Age":"20"},' +
 '{"Name":"<b>I could be a cross code scripting attack, but I am not.</b>","Age":"???"},' +
 '{"Name":"Bat Man","Age":30},' +
 '{"Name":"Sam","Age":22}' +
']}';

obj = JSON.parse(text);

document.getElementById("nastyParse").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;



//parse null with empty string
var text = '{"team":[' +
 '{"Name":"Asher","Age":"20"},' +
 '{"Name":null,"Age":""},' +
 '{"Name":"Bat Man","Age":30},' +
 '{"Name":"Sam","Age":22}' +
']}';

obj = JSON.parse(text);

document.getElementById("nastyParse1").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;


//parse just null
/*
ar text = null;

obj = JSON.parse(text);

document.getElementById("nastyParse2").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;
*/


//parse an single string
/*
var text = "Hello World!";

obj = JSON.parse(text);

document.getElementById("nastyParse2").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;
*/



// empty string
/*
var text = "";

obj = JSON.parse(text);

document.getElementById("nastyParse2").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;
*/

//looks like JSON but is not
/*
var text = '{"team":[' +
 '{"Name":"Asher","Age":"20"},' +
 '{"Name":null,"Age":""},' +
 '{"Name":"Bat Man","Age":30},' +
 'hello world' +
']}';

obj = JSON.parse(text);

document.getElementById("nastyParse1").innerHTML = obj.team[1].Name + " is " + obj.team[1].Age;
*/


//stringify

//happyStringify
var Fun = new Array();
  Fun[0] = "Asher";
  Fun[1] = "20";
  Fun[2] = "Cody";
  Fun[3] = "25";
  Fun[4] = "JT";
  Fun[5] = "24";
  Fun[6] = "Sam";
  Fun[7] = "23";


var string = JSON.stringify(Fun);

arrayFromString = JSON.parse(string);

document.getElementById("happyStringify").innerHTML = arrayFromString[2] + " is " + arrayFromString[3];




//nastyStringiy


// what if its null or empty, what if you stringify a string, what if it is function
//null
var Fun = null;

var string = JSON.stringify(Fun);

document.getElementById("nastyStringify").innerHTML = string;




// String
var Fun = "Hello World";

var string = JSON.stringify(Fun);

document.getElementById("nastyStringify1").innerHTML = string;



// Function
function reallyFun() {
  return 2 + 2;
}

var string = JSON.stringify(reallyFun);

document.getElementById("nastyStringify2").innerHTML = string;
