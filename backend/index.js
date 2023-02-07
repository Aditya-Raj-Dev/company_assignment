const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.post("/",(req,res)=>{
    const numberPattern = /^[1-9][0-9]*$/;
    if ((!numberPattern.test(req.body.num1)) || (!numberPattern.test(req.body.num2))) {
      return res.status(400).send({ error: 'Invalid number' });
    } 
    let obj={}
    let num1=req.body.num1.toString()
    let num2=req.body.num2.toString()
    let ans=[]
    let carry=[]
    let max=Math.max(num1.length,num2.length)
      n1=num1.padStart(max,"0")
      n2=num2.padStart(max,"0")

       for(let i=max-1; i>=0; i--){
          sum=+(n1[i]) + +(n2[i])
          
       }
    res.send({"arr":n1,n2,max})

})

app.listen(8080,async()=>{
    try{
        await console.log("server connected on port no 8080")
    }
    catch{
        console.log("Error in connecting")
    }

})