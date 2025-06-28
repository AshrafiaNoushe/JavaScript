// let arr =[80,84,90,91,96,92,78,67,40,50];
// let newArr = arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);

let num = prompt("Give the num: ");
let arr =[];
for(let i=1;i<=num;i++){
    arr[i-1] = i;
}
console.log(arr);
let m = arr.reduce((prev,curr)=>{
    return prev+curr; //sum
});
console.log("sum: ",m);
let p = arr.reduce((prev,curr)=>{
    return prev*curr; //product
});
console.log("Product: ",p);