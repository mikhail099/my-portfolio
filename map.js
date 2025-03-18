const numbers= [1,2,3,4,];
const doubled = numbers.map(num =>num*2);
//console.log(doubled);

const books=[
    {title:'angels and demons',author:'Thompson',pages:343},
    {title:'Peter pan',author:'Keys',pages:55},
    {title:'quantam physics',author:'sebastian',pages:145}
];
const author= books.map(book=> book.author);
//onsole.log(author);

const celsius =[0,20,30,40];
const fahrenheit= celsius.map(temp=>(temp*9/5)+32)
console.log(fahrenheit);

const students=[
    {name:'Alice',score:90},
    {name:'Kelly',score:80},
    {name:'Gabby',score:70}
];
const bonus=5;
const updateStudents= students.map(student=>({
    ...student,
    score:student.score+bonus
}));

console.log(updateStudents)