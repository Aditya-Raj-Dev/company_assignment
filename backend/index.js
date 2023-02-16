const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/", (req, res) => {
  const numberPattern = /^[1-9][0-9]*$/;
  if (
    !numberPattern.test(req.body.num1) ||
    !numberPattern.test(req.body.num2)
  ) {
    return res.send({ msg: "Invalid number",status:"error" });
  }

  let num1 = req.body.num1.toString();
  let num2 = req.body.num2.toString();
  let max = Math.max(num1.length, num2.length);
  n1 = num1.padStart(max, "0");
  n2 = num2.padStart(max, "0");
  let carry = [];
  let ans = [];
  for (let i = max - 1; i >= 0; i--) {
    sum = +n1[i] + +n2[i];
    carry[carry.length-1] === "1" ? (sum = sum + 1) : (sum = sum + 0);
    console.log(carry[0])
    console.log(carry)
    if (sum > 9) {
      if (i === 0) {
        sum = sum.toString();
        ans.push(sum);
        carry.push("0");
      } else {
        sum = sum.toString();
        ans.push(sum[1]);
        carry.push("1");
      }
    } else {
      carry.push("0");
      ans.push(sum.toString());
    }
  }
  let carrystr = [];
  let sumstr = [];
  for (let i = 0; i < ans.length; i++) {
    let k;
    let c;
    if (i === 0) {
      c = carry[i];
      k = ans[i];
    } else {
      c = carry[i] + carrystr[i - 1];
      k = ans[i] + sumstr[i - 1];
    }
    sumstr.push(k);
    carrystr.push(c);
  } 
 
  let len=carrystr.length-1
   for(let k=len; k>=0; k--){
   if(carrystr[k][0]==="0" && k===carrystr.length-1){
      carrystr.pop()
    }
   }
  
  res.send({msg:{ "carrystr": carrystr,"sumstr":sumstr},status:"success"});
});

app.listen(8080, async () => {
  try {
    await console.log("server connected on port no 8080");
  } catch {
    console.log("Error in connecting");
  }
});
