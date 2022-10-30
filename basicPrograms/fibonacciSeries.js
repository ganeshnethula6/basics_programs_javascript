// program to generate n number of fibonocci series...

let num=parseInt(prompt("Enter the value"));
let n1=0,n2=1,nextNum;
console.log(n1," ",n2);
for(let i=0;i<num;i++){
nextNum=n1+n2;
console.log(" ",nextNum);
n1=n2;
n2=nextNum;
}
