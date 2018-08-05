const dns = require("dns");
const fs = require("fs");
const modules = require("./module");

const filename = "dns_information.xls";
var filepath = "./dns_information.xls";

let ip = {};
ip.One = "193.235.151.130";
ip.Two = "193.234.151.142";

let destination = {};
destination.One = "aftonbladet.se";
destination.Two = "faktiskt.se";

var Search = new modules.DNS_CLASS();
var File = new modules.FileSystem();

Object.keys(destination).forEach(function(key) {
    Search.NSlookUp(destination[key], filename);
  });

  Object.keys(ip).forEach(function(key) {
    Search.ReverseLookUp(ip[key], filename);
  });

File.ReadFile(filepath);
Search.TimeStamp(filename);

