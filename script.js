// ## Exercise3

// from Exercise1 or Exercise2
// Instead of printing the day of the week, your program should **print whether it is the weekend or  weekday**. for example "Wednesday" then show "It is the weekday!"
// Use the logical operators.
const day='Saturday'
if(day==='Monday' ||day=== 'Tuesday' ||day=== 'Wednesday' ||day=== 'Thursday' ||day=== 'Friday' ){
    console.log('weekday');
}else if(day==='Sunday' || day==='Saturday'){
    console.log('weekend');
}