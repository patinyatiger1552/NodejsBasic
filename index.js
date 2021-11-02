const message = "Patinya"
console.log(message)
const result = 5+5
console.log(result)

//รับข้อมูลจาก modules มาแสดง
const util = require('./modules/mymodules.js')
const number = 50000

console.log(util.getCurrentTime())
console.log(util.add(50,100))
console.log(util.formatNumber(number))

