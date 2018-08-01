
const fs = require('fs');
const Textclass = require('./module');
var mclass = Textclass;

var k = new mclass.Filehandling();

var textDocument = "text.txt";

var inputText = "\r\nText line input for textDocument!";
var time = mclass.slogan;

k.Add_Text_Method(textDocument,inputText);
k.Read_File_Method(textDocument);
console.log(time);

