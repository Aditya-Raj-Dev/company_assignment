// const express=require("express")
// const { connection } = require("./db")
// const { Compmodel } = require("./model")
// const cors=require("cors")

// const app=express()
// app.use(express.json())
// app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("welcome")
// })

// app.post("/",async(req,res)=>{
//     console.log(req.body)
//     try{
//         const data=await Compmodel.create(req.body)
//         res.send({"data":data})
//     }
//     catch(e){
//         res.send({"err":e})
//     }
// })
// app.get("/get",async(req,res)=>{
//     try{
//         const data=await Compmodel.find().limit(20)
//         res.send({"data":data})
//     }
//     catch(e){
//         res.send({"err":e})
//     }
// })

// app.listen(8080,async()=>{
//     try{
//         await connection
//         console.log("database connected")
//     }
//     catch{
//         console.log("error")
//     }
// })


// function myFunc(a, a, b){
//     let x=1
//      x=2
//     console.log(x)
//     console.log("Result --> ", a + a + b);
//    }
   
   
//    myFunc(1,2,3);


async function getData(req, res) {
    try {
      const a = await someOtherFunction();
      const b = await somethingElseFunction(a);
      res.status(200).send(b);
    } catch (error) {
      res.status(500).send(error.stack);
    }
   }
  

   async function getData(req, res) {
    someOtherFunction()
      .then(()=>{
        const b =somethingElseFunction(a)
        res.status(200).send(b);
      })
      .catch((e)=>{
        res.status(500).send(error.stack);
      })
    } 


    function someOtherFunction(){
        return 10
    }

    function somethingElseFunction(a){
        return a**a
    }
    
    getData({})

   