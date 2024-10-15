//#region 
/**
 * 
 * @param {First Natural number} a 
 * @param {Second Natural number} b 
 * @returns Square root of squares of params
 */
function tFun(a, b) {
    return Math.hypot(Math.pow(a, 2) + Math.pow(b, 2));
}
//#endregion
//Slice
//#region 
/**
 * Function to illustrate slicing of buffers
 */
function slicBuffer() {
    let bufa = new Buffer("This is a story");
    let bufb = bufa.slice(0, 7);
    console.log(bufb.toString());
}
//#endregion
//Copy
//#region 
/**
 * Copy one buffer into another
 */
function bufcopy() {
    let bufa = new Buffer("My Buffer");
    let bufb = new Buffer(10);
    bufa.copy(bufb);
    console.log(bufb.toString());
}
//#endregion
//Concatention
//#region 
/**
 * This function illustrates concatenation of buffers
 */
function bufConcat() {
    let bufa = new Buffer("First Buffer ", "ascii");
    let bufb = new Buffer("Second Buffer ", "ascii");
    let bufc = new Buffer("Third Buffer", "ascii");
    const nBuf = Buffer.concat([bufa, bufb, bufc]);
    console.log(nBuf.toString());
}
//#endregion
//Reading
//#region 
/**
 * Function illustrating reading of buffers
 */
function readBuf() {
    let buf = new Buffer(26);
    let str = '';
    for (let i = 0; i < 26; i++) {
        const ele = String.fromCharCode(i + 97);
        str += ele;
    }
    buf.write(str, "ascii");
    console.log(buf.toString());
}
//#endregion
//Writing
//#region 
/***
 * Function to illustrate the write op on buffer
 */
function bufWrite() {
    const bufd = new Buffer(256);
    console.log("Empty buffer ", bufd);
    let len = bufd.write("This is a test string inside buffer", "utf-8");
    console.log("String written to buffer ", len);
}
//#endregion
//Creation
//#region 
/**
 * Function to illustrate the creation of buffer
 */
function bufCrea() {
    const buf = new Buffer(10);
    console.log(buf);
    const bufa = new Buffer("This is a buffer");
    console.log(bufa);
    const bufb = new Buffer([1, 2, 3, 4, 5]);
    console.log(bufb);
    const bufc = new Buffer("Test String", "utf-8");
    console.log(bufc);
}
//#endregion

console.log(tt(1, 2));
console.log(tt(1, 2, 3));
console.log(tt(1, 2, 100, 939393, 65656565, 767676));
/**
 * 
 * @param  {...any} b 
 * @returns 
 */
function tt(...b) {
    return [...b].join(";")
}