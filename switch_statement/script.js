// const day='November';

// switch (day)
// {
//     case 'Monday': //day==='Monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;

//     case 'Tuesday': //day==='Tuesday'
//         console.log('D');
//         break;

//     case 'Wednesday': //day==='Wednesday'

//     case 'Thursday': //day==='Thursday'
//         console.log('Write code examples');
//         break;

//     case 'Friday': //day==='Friday'
//         console.log('Record videos');
//         break;

//     case 'Saturday': //day==='Saturday'

//     case 'Sunday': //day==='Sunday'
//         console.log('Enjoy the weekend :D');
//         break;

//     default:
//         console.log("Not a valid day!");
// }

const marks='10';

switch (true)
{
    case marks>=0 && marks<=40:
        console.log('F');
        break;

    case marks>=40 && marks<=49:
        console.log('D');
        break;

    case marks>=50 && marks<=59:
        console.log('C');
        break;

    case marks>=60 && marks<=69:
        console.log('B');
        break;

    case marks>=70 && marks<=100:
        console.log('A');
        break;

    default:
        console.log("Please use valid marks!");
}