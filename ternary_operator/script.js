// const age = 12;
// age >=18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// let bill = 50 ;
// let tip = 0.15*bill;
// let total =tip+bill;

// bill >=50 && bill <=300? console.log(`Dear customer your tip value is ${tip},your bill is ${bill}and your total is ${total}):console.log(`Your tip is $(bill*(0.2+))and 'total is' + (bill+bill*(0.2)));


const bill=20;
const tip=bill <=300 && bill >=50 ? bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);