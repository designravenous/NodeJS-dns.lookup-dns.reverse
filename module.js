
const fs = require('fs');



class Filehandling{
    
    Add_Text_Method(textfile, text){
        fs.appendFile(textfile,text, function(err){
            if(err) return err;
            console.log("Appended Text added to the document, " + textfile);
        })        
    }
    New_Text_Method(textfile,text){
        fs.writeFile(textfile,text, function(err){
            if (err) return err;
            console.log("WriteFile Text have been added to the document, " + textfile);
        })
    }
    Read_File_Method(textfile){
        fs.readFile(textfile,"utf8", function(err, data){
            if (err) return err;
            console.log(data);
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


module.exports.Filehandling = Filehandling;
module.exports.slogan = slogan;



