const fs = require("fs");

function ttt() {
    console.log("Function from other file");
}

//#region 
/**
 * This is a function which reads a file in async mode
 */
function asyncRead() {
    fs.readFile("C:\\DelhiOfficeFiles\\sopraoct2024\\firstt.txt", function (e, d) {
        if (e) return console.log(e.message);
        console.log(d.toString());
    });
    console.log("Program ended....");
}
//#endregion

//#region 
/**
 * This is function which reads the file in sync mode
 */
function syncRead() {
    //blocking mode
    //Synchronous way of reading a file
    let data = fs.readFileSync("C:\\DelhiOfficeFiles\\sopraoct2024\\firstt.txt");
    console.log(data.toString());
    console.log("Program ended");
}
//#endregion

module.exports.mymod = {
    a: asyncRead(), b: syncRead(), c: ttt()
}