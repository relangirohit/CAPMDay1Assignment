console.log("Hello..!!!")

var fact=require("factorial")
var fs=require("fs")

console.log(fs.readFile("exmpl.txt",()=>console.log("readFile")))

let a=2,b=4
console.log(fact(a+b))
console.log(fs.readFileSync("exmpl.txt","utf-8"))

const lib = require("./lib.js")
console.log(lib.sum(2,3), lib.diff(1,6))