
// sleep(3000)
// .then((r)=>console.log("r"))
// .catch((e)=>console.log("e"))

// function sleep(p){
//   return new Promise((res,rej)=>{
//     if(typeof(p)!=="number"){
//            rej()
//     }
//     else{
//         setTimeout(()=>{
//             res()
//         },p)
        
//     }
//   })
// }

// let promise =new Promise(async  (res,rej)=>{
//     let num=true;
//     if(num){
//      await new Promise(resolve=>{ setTimeout(()=>{
    
//             res("f")
//             resolve()
//         },4000)
//     });
//        console.log("c=d")
//     }
//     else{
//         rej("k")
//     }
// })

// promise.then((r)=>{
//     console.log(r)
// })
// .catch((e)=>console.log(e))

console.log(NaN==NaN)