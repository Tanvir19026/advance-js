
function stopwatch()
{
  let count=0;
  return function (){
    count++;
    return count
  }
}
const clock1=stopwatch();
console.log('clock-1',clock1());
console.log('clock-1',clock1());
console.log('clock-1',clock1());

const clock2=stopwatch();
console.log('clock-2',clock2());
console.log('clock-2',clock2());
console.log('clock-2',clock2());
