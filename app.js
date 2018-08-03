const dns = require("dns");
const fs = require("fs");
const modules = require("./module");

const filename = "dns_information.xls";

let ip = {};
ip.One;
ip.Two = "193.234.151.142";

let destination = {};
destination.One = "aftonbladet.se";

var Search = new modules.DNS_CLASS();

Object.keys(destination).forEach(function(key) {
    Search.NSlookUp(destination[key], filename);
  });

  Object.keys(ip).forEach(function(key) {
    Search.ReverseLookUp(ip[key], filename);
  });
  
  Search.TimeStamp(filename);

