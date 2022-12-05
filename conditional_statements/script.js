// let num = 9 ;

// if (num % 2 == 0 )//if (num % 2 > 0 )
// {
//     console.log("This number is not even")
// }
// else{
//     console.log("This number is even")
// }

let marks=101;

if (marks<0 | marks>100)
{
    console.log("Marks can't be less than 0 and marks can't be more than 100")
}

else if (marks >=0 && marks <=39)
{
    console.log("F")
}
else if (marks >=40 && marks <=49)
{
    console.log("D")
}
else if (marks >=50 && marks <=59)
{
    console.log("C")
}
else if (marks >=60 && marks <=69)
{
    console.log("B")
}
else 
{
    console.log("A")
}