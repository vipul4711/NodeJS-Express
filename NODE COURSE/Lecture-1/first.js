console.log("Hellow World");
const fs = require("fs");

fs.writeFile("output.text" , "Writing File" , (err)=>{
    if(err) console.log(err);
    else console.log("FIle written successfully");
})