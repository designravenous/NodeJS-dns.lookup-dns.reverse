
const fs = require('fs');
const Textclass = require('./module');
var m2 = Textclass;

var k = new m2.Filehandling();


var textDocument = "text.txt";

var inputText = "\r\nText line input for textDocument!";
var time = m2.slogan;



k.Add_Text_Method(textDocument,inputText);
k.Read_File_Method(textDocument);
console.log(time);

