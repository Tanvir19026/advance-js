const number=[10,20,30,40,50,1,2,5];
const part=number.slice(2,5);

const removed=number.splice(2,2,100,200);

const joint=number.join(" rafi ");

console.log(joint);
console.log(number);


// slice hocce (2,5) = 2 number index theke strt hbe 5 number index porjonto jbe...number
//   alada ekta array dibe and mol array thik thkbe...

//   splice hocce (2,2)=2 number index thke count hbe poroborti 2 ta index sorai felbe and mol array thik thkbe na ...inject kora jbe bolte add kora jbe new item 
    