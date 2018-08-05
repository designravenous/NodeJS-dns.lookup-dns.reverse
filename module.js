const dns = require("dns");
const fs = require("fs");

class DNS_CLASS{

    NSlookUp(destination, filename){
        dns.lookup(destination, (err,address, family)=>{
            if(err) return err;
            var results = "\r\nnsLookUp for: " + destination + " = " + address + " IPv" + family;
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
    TimeStamp(filename){
        let time ={};
        time.year = new Date().getFullYear();
        time.month = new Date().getMonth();
        time.day = new Date().getDate();
        time.hour = new Date().getHours();
        time.minute = new Date().getMinutes();
        time.seconds = new Date().getSeconds();
        var H_our;
        var M_minute;
        var S_econd;
        if(time.hour < 10){
            H_our = "0" + time.hour;
        }else{
            H_our = time.hour;
        }
        if(time.minute < 10){
            M_minute = "0" + time.minute;
        }else{
            M_minute = time.minute;
        }
        if(time.seconds < 10){
            S_econd = "0" + time.seconds;
        }else{
            S_econd = time.seconds;
        }
        var current_time = "\r\n" + time.day + "/" + time.month + "/" + time.year + " " + H_our + ":" + M_minute + ":" + S_econd;
        fs.appendFile(filename, current_time, function(err){
            if(err) return err;
            console.log(current_time);
        } )
    }

}

class FILE_SYSTEM{

    ReadFile(filepath){
        fs.readFile(filepath,"utf8", function read(err,data){
            if(err){
                throw err;
            }
            var content = data;
            readFunction(content);
        })
        function readFunction(content){
            console.log(content);
        }
    }
}
module.exports.DNS_CLASS = DNS_CLASS;
module.exports.FILE_SYSTEM = FILE_SYSTEM;

