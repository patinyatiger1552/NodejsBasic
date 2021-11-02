// สร้าง Promise
const connect = true //เช็คว่าต่อเน็ต
const url1 = "tiger.dev/file1.json"
const url2 = "roger.dev/file2.json"
const url3 = "star.dev/file3.json"
const url4 = "popper.dev/file4.json/"

 function downloading(url){
   return new Promise(function(resolve, reject){
     console.log(`กำลังโหลดข้อมูล ${url}`)
     setTimeout(() => {
       if(connect){
       resolve(`โหลด ${url} เรียบร้อย`)
     }else{
       reject(`เกิดข้อผิดพลาด`)
     }
     }, 3000);
   })
 }

//  downloading(url1).then(result=>{
//    console.log(result)
//  }).catch(err=>{
//    console.log(err)
//  }).finally(()=>{
//    console.log("จบการทำงาน")
//  })


 // promise hell

 downloading(url1).then(function(result){
   console.log(result)
   return downloading(url2)
 }).then(function(result){
   console.log(result)
   return downloading(url3)
 }).then(function(result){
   console.log(result)
   return downloading(url4)
 })