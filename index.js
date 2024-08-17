const fs = require("fs");

fs.write("index.txt", "test",(err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("file wrriten succesfully ");
    }
});

fs.readFile("index.html", "utf-8", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("data");
    }
});

 fs.rename("index.html","index.html",(err) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log("FILE NAME CHANGED SUCCESFULLY");
        
    }
});

fs.appendFile("index.html","siuuuu",(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("DATA ADDED SUCCESFULLY");
        
    }
});


fs.unlink("index.txt",(err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("FILE DELETED SUCCESFULLY");
        
    }
});

