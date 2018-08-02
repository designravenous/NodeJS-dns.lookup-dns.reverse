const dns = require("dns");
const fs = require("fs");
const modules = require("./module");

const filename = "dns_information.xls";

let ip = {};
ip.One = "10.61.100.101";
ip.Two = "185.147.172.166";

let destination = {};
destination.One = "oppwa.com";
destination.Two = "google.com";
destination.Three = "hm.com";
destination.Four = "designravenous.com";


var Search = new modules.DNS_CLASS();

Object.keys(destination).forEach(function(key) {

    Search.NSlookUp(destination[key], filename);
    
  });
  Object.keys(ip).forEach(function(key) {

    Search.ReverseLookUp(ip[key], filename);
    
  });
var time = mclass.slogan;
console.log(time);

