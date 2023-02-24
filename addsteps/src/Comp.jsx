import React, { useState } from 'react'
import axios from "axios"
const Comp = () => {
    const [text,setText]=useState("")
    const [res,setRes]=

    function handlechange(e){
     setText(e.target.value)
    }


       function handleadd(text){
         const data=text.split(",")
         console.log(data)
         const obj={data:data}
         axios({
            url:"http://localhost:8080",
            method:"POSt",
            data:obj
         })
         .then((r)=>{
            console.log("success")
            console.log(r.data)
         })
         .catch((e)=>{
            console.log(e)
         })
       }

  return (
    <div>
        <h1>app</h1>
        <input type="text"  onChange={handlechange}/>
        <button  onClick={()=>handleadd(text)}>post</button>
    </div>
  )
}

export default Comp