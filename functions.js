//using functions
// function countV(s){
//     let vowel = "";
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]==='a' || s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]==='u'){
//             vowel+= s[i];
//             count++;
//         }
//     }
//     return vowel;

// }
// let str = "iamdoingmybesttoproveyou";
// let result = countV(str);
// console.log(result);


//using array function
const m =(s)=>{
    let count =0;
   for(let i=0;i<s.length;i++){
        if(s[i]==='a' || s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]==='u'){
            //vowel+= s[i];
            count++;
        }
    } return count;  
}
let str = "hehehehe";