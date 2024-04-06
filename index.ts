//currency converter By MISHAL NADEEM

import inquirer from "inquirer";

//IN PKR
let conversion ={
    "PKR":{
        "USD":0.0036,
        "GBP":0.0037,
        "PKR":1
    },

    //GBP
    "GBP":{
        "USD":1.21,
        "PKR":350,
        "GBP":1
    },

    // IN Dollar
    "USD": {
        "PKR":277.58,
        "GBP":0.083,
        "USD":1

    },
}
 //Step 2 using inquirer

 const answer:{
    from: "PKR"|"USD"|"GBP",
    to:"PKR"|"USD"|"GBP",
 
 //datatype decleared
 amount:number
 } =await inquirer.prompt([
    {
        type:"list",
        name:"from",
        choices:["PKR","USD","GBP"],
        message:"Select your currency..?"
    },
    {
        type:"list",
        name:"to",
        choices:["PKR","USD","GBP"],
        message:"Select your conversion currency..?" 
    },

    //conversion amount
    {
        type:"number",
        name:"amount",
        message:"Enter your conversion amount"
    }
 ])

 //Step 3 output

 const{from,to,amount} = answer;
  
 //check input in given program

if(from&& to&& amount){
    //formula
    let result = conversion[from][to] *amount
    console.log(`your conversion from ${from}to ${to} is ${result}`)

    
}else{
    //generate error
    console.log("Invalid inputs")
}