//To change The attributes
let para = document.querySelector("div");
console.log(para);
console.log(para.setAttribute("id","myId")); //here ith won't change the attribute
//  but will the attribute val

//we can style in JS instead of CSS
let p = document.querySelector("p");
p.style.color = "purple";

//How can we add new elements?
let b = document.createElement("button");
b.innerHTML="<i> Hi its new element button</i>";
document.body.append(b);
//another button
let p1 = document.createElement("button");
p1.innerText ="Another button";
document.body.append(p1);
let para1 = document.createElement("p");
para1.innerHTML="<i>This is the created paara ele</i>";
let existp = document.querySelector(".myCls")[0]; //to get 1st matching element
