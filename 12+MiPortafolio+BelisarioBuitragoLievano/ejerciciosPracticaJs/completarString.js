
var name1 = prompt("Cual es su nombre");
// Isolate the first char
var firstChar = name1.slice(0,1);
// Turn the first char uppercase
var upperCaseFirstChar = firstChar.toUpperCase();
//isolate the rest of the name
var restOfName = name1.slice(1, name1.length);
//Chenge the rest of the name to lower case
restOfName = restOfName.toLowerCase();

//concatenate the first char with the rest of the name
var capitalisedName = upperCaseFirstChar + restOfName;
//we used the capitalised version of their nameto great them using an alert
alert("hello " + capitalisedName);


