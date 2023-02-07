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
    return res.status(400).send({ error: "Invalid number" });
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
    carry[0] === "1" ? (sum = sum + 1) : (sum = sum + 0);
    if (sum > 9) {
      carry.push("1");
      if (i === 0) {
        sum = sum.toString();
        ans.push(sum);
      } else {
        sum = sum.toString();
        ans.push(sum[1]);
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
  carrystr.pop();
  res.send({ "carrystr": carrystr,"sumstr": sumstr });
});

app.listen(8080, async () => {
  try {
    await console.log("server connected on port no 8080");
  } catch {
    console.log("Error in connecting");
  }
});
