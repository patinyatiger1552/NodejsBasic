// สร้าง promise
const connect = true // ต่อเน็ต
const url1 = "tigerdev.dev/file1.json"

  function downloading(url){
    return new Promise((resolve, reject) =>{
      console.log(`กำลังโหลด ${url}`)
      setTimeout(() => {
        if(connect){
          resolve(`โหลด ${url} เรียบร้อย`)
        }else{
          reject("เกิดข้อผิดพลาด")
        }
      }, 3000);
    })
  }

  //Async & await

  async function start(){
    console.log(await downloading(url1))
  }

  start()

  // api ภาพสินค้า (backend) -> frontend (แสดงภาพสินค้า)

  // api (promise) -> (pending) -> รอข้อมูลมาครบ (await) -> แสดงภาพ

  // loading...... -> แสดงภาพ