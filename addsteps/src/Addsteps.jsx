import axios from 'axios'
import React, { useState } from 'react'

import "./Addsteps.css"
const Addsteps = () => {
 
    const [num,setNum]=useState({
        num1:"",
        num2:""
    })
    const [show,setShow]=useState(true)
    const [msg,setMsg]=useState("")
    const [carrystr,setcarrystr]=useState([])
    const [sumstr,setSumstr]=useState([])

    function handlechange(e){
      const {value,name}=e.target;
      setNum({
        ...num,
        [name]:value
      })
    }
    

    function handleclick(){
      axios({
        url:"http://localhost:8080",
        method:"POST",
        data:num
      })
      .then((r)=>{
        if(r.data.status==="success"){
            setShow(true)
            setcarrystr(r.data.msg.carrystr)
            setSumstr(r.data.msg.sumstr)
        }
        else{
          setShow(false)
          setMsg(r.data.msg)
        }
      })
      .catch((e)=>{
        console.log(e)
      })
    }

    console.log(show)
  return (
    <div >
        <h1>Step Addition App</h1>
        <div>
            <label >First Number : </label>
             <input type="text"
             placeholder='First Number'
             name="num1"
             onChange={handlechange}
              />
        </div>
         <br />
        <div>
        <label >Second Number : </label>
            <input type="text"
            placeholder='Second Number'
            name="num2"
            onChange={handlechange} />
        </div>
        <br />
        <div>
            <button
            onClick={handleclick}
            >Generate Steps</button>
        </div>

        <br />
        <div className='ansbox'>
              {
                show ? 
                <div>
                   {
                    sumstr.map((item,i)=>(
                        <div key={i} style={{color:"white"}}>
                       {
                         `{ step${i+1}: 
                         {"carryString":
                         "${carrystr[i]?carrystr[i]:carrystr[carrystr.length-1]}_","sumString":"${item}" }`
                       }
                        </div>
                    ))
                   }
                </div>:
                <div>
                <h2 style={{color:"red"}}>{msg}</h2>
                </div>
              }
        </div>
    </div>
  )
}

export default Addsteps