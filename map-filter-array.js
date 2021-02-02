const student=[
 {id:1,name:"tanvir"},
 {id:2,name:"rahman"},
 {id:3,name:"rafi"},
 {id:4,name:"jinnatun"},

]
const Listofname=[];
for(let i=0;i<student.length;i++)
{
  const element=student[i];
  const result=element.name;
  Listofname.push(result);
}
// console.log(Listofname);

// **using map
const result=student.map(s => s.id);

//using filter
const sid=student.filter(s => s.id>1)

// using find
const sidtwo=student.find(s=> s.id>1)

console.log(sidtwo);