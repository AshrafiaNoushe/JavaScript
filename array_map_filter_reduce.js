/*let arr = [3,5,6,7,8,9];
let newArr= arr.map((val)=>{
    //console.log(val*val);
    //return val*val;

});
console.log(newArr);

//filter
let arr =[12,23,1,2,3,4,56];
let EvArr = arr.filter((val)=>{
    return val%2==0;
});
console.log(EvArr);
//reduce_>for multiple input we will get one output like arr sum,avg
let arr = [1,2,3,4,5];
let sum = arr.reduce((prev,next)=>{
    return prev+next;
});
console.log("Sum: ",sum);
*/
//finding largest or smallest using reduce 
//->here we will store the big in prev then put condition in return that
//prev>curr?prev:curr;
let arr =[9,0,3,79,21,67,90];
let largest = arr.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
});
console.log("Largest: ",largest);