let uname = prompt("hey enter your name for suggesting username:")
//let name = uname;
let name = uname.trim().replace(/\s+/g,'');
let susername = name.toLowerCase();
console.log(susername);
let atr = "@";
let addU = atr.concat(susername);
console.log(addU);
let len = addU.length;
let fuser = addU+len;
console.log("Username:",fuser);