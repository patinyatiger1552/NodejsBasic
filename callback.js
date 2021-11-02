// ทบทวน Function Callback

function calculate(x,y,callback) {
  // console.log("กำลังคำนวณ...")
  setTimeout(() => {
    const sum = x+y
    callback(sum)
  }, 3000);
}

function display(result){
  // console.log(`ผลบวก = ${result}`)
}

// ฟังก์ชั่นแบบปกติ
const sum = calculate(100,50,display)


// Function แบบ callback (เขียนโปรแกรมดาวน์โหลดไฟล์)

const url1 = "tiger.dev/file1.json"
const url2 = "roger.dev/file2.json"
const url3 = "stack.dev/file3.json"

function downloading(url,callback){
  console.log(`กำลังดาวน์โหลดไฟล์จาก ${url}`)
  setTimeout(() => {
    callback(url)
  }, 3000);
}

// callback hell ไม่ควรใช้
downloading(url1,function(result){
  console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
  downloading(url2,function(result){
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    downloading(url3,function(result){
      console.log(`ดาวน์โหลด ${result} เรียบร้อย`)
    })
  })
})