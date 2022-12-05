let mark_height=1.88;
let mark_weight=95;
let john_height=1.76;
let john_weight=85;
let result1=95/(1.88**2);
let result2=85/(1.76*1.76);

// let mark_height=1.69;
// let mark_weight=78;
// let john_height=92;
// let john_weight=1.95;
// let result1=78/(1.69**2);
// let result2=92/(1.95**2);
let markHigherBMI=result1>result2;

// if(result1 > result2) //if((result1=95/(1.88*1.88)) > (result2=85/(1.76*1.76)))
// {
//     console.log("Mark's BMI is greater than John's")
// }
// else
// {
//     console.log("John's BMI is greater than Mark's")
// }

console.log("Mark's BMI is" +' '+ result1);
console.log("John's BMI is" +' '+ result2);
console.log(markHigherBMI);

if (result1>result2)
{
    console.log("Mark has a higher BMI");

}
else if(result1==result2) 
{
    console.log("Mark and John have the same BMI");
}
else
{
    console.log("John has a higher BMI");
}