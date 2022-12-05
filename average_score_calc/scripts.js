// let dolphins_mean=(100+100+100)/3;
// let koalas_mean=(100+100+100)/3;

let dolphins_mean=(10+10+101)/3;
let koalas_mean=(12+12+123)/3;

// let dolphins_mean=(97+112+101)/3;
// let koalas_mean=(109+95+106)/3;

if (dolphins_mean > koalas_mean && dolphins_mean >= 100)
{
    console.log("To The winner of the competition is the dolphin's team with a mean of"+' '+dolphins_mean);
}
else if (koalas_mean > dolphins_mean && koalas_mean >= 100)
{
    console.log("The winner of the competition is the koala's team with a mean of"+' '+koalas_mean);
}
else if (dolphins_mean == koalas_mean && koalas_mean >= 100 && dolphins_mean >= 100) //look at the difference between == and ===
{
    console.log("Both teams are at a draw therefore there is no winner of the competition");
}
else if (dolphins_mean > koalas_mean && dolphins_mean < 100)
{
    console.log("Team dolphin wins but score is less than 100")
}
else if (koalas_mean > dolphins_mean&&koalas_mean < 100)
{
    console.log("Team koala wins but score is less than 100")
}
else 
{
    console.log("There is no winner for the competition");
}