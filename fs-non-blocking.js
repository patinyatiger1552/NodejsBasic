//non-blocking
const fs = require('fs')


//อ่านไฟล์ input.txt
fs.readFile("myFile/input.txt", 'utf-8' ,(err,data) =>{
  if (err) return console.log("เกิดข้อผิดพลาด",err)
// เขียนไฟล์ input
const outputText = `Hello Node.js \n${data}\nไฟล์นี้ถูกเขียนเมื่อ\n ${new Date()}`
fs.writeFile("myFile/input1.txt",outputText,err =>{
  if(err) return console.log("เกิดข้อผิดพลาด")
  console.log("เขียนไฟล์เรียบร้อย")
 })
})


