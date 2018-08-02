const dns = require("dns");
const fs = require("fs");

class DNS_CLASS{

    NSlookUp(destination, filename){
        dns.lookup(destination, (err,address, family)=>{
            if(err) return err;
            var results = "\r\naddress for: " + destination + " = " + address + " IPv" + family;
            console.log("address for: " + destination + " = " + address);
            fs.appendFile(filename, results, function(err){
                if(err) return err;
                console.log("File completed");
            } )
        })
    }

    ReverseLookUp(ip, filename){        
        dns.reverse(ip, function(err,hostname){
            if(err) console.log(err);
            var results = "\r\nIP address: " + ip + " = " + hostname;

            fs.appendFile(filename, results, function(){
                if(err) return err;
                console.log("ReverseLookup created for " + ip);
                
            })
        })
    }
}

let time ={};
time.year = new Date().getFullYear();
time.month = new Date().getMonth();
time.day = new Date().getDate();
time.hour = new Date().getHours();
time.minute = new Date().getMinutes();
time.seconds = new Date().getSeconds();

var slogan = time.day + "/" + time.month + "/" + time.year + " Time: " + time.hour + ":" + time.minute + ":" + time.seconds;

module.exports.DNS_CLASS = DNS_CLASS;
module.exports.slogan = slogan;


