//Blocking
const fs = require('fs');

//อ่านไฟล์ input.txt
const data = fs.readFileSync('myFile/input.txt', 'utf8')
console.log(data)
console.log("จบการทำงาน")

//เขียนไฟล์

const outputText = `Hello node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
fs.writeFileSync("myFile/output.txt",outputText)
console.log("เขียนไฟล์เรียบร้อย")