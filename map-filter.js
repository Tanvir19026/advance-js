
// square ber korar type
const numbers=[1,2,3,4,5]
const square=[];
// ager niom
for(let i=0;i<numbers.length;i++)
{
   const element=numbers[i];
   const result=element*element;
   square.push(result);
}

console.log(square);

// use function
function double(element)
{
  return element*element;
}


// ***map
// new map use
const result=numbers.map(function(element){
  return element*element;
})
console.log(result);

// map e function dokale 3 ta perameter pawa jabe
// 1.element,2.index,3.array||
// ***array return kore


// use arrow function

const result=numbers.map(x => x*x)
console.log(result);

// ***filter
// filter use kore olpo kico element select korar jonne and sorto full fill korte use hoy
// ***array return kore

const bigger=numbers.filter(x => x>2)   //2 er theke boro gola show korbe
console.log(bigger);

// ***find  shodho matro element dey
const smaller=numbers.find(x => x>2)   //2 er theke boro gola show korbe
console.log(smaller);




