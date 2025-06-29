function multiply(number1 , number2)
{
   let  resuilt = number1 * number2
    return resuilt
}


console.log(multiply(5 , 6), 'you answer ')

console.log("====================================================Addition===========================")

let num1;
let num2;
let outupt;

function addition(num1 , num2){

    if(num1 > 10){
        console.log('DO SUBSCTRATION')
        outupt = num1 - num2;

    }
    else{
        console.log("DO addition ")
        outupt = num1 + num2;
    }
    return outupt;

}

console.log("checking the  function", addition(-1000000000,10))