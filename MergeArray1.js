//Merge two arrays using Arrow, Map and Iterators.
var num1 = [45, 4, 9, 16, 25];
var num2 = [2,3,4,5,6,7];
var num3=[];
num1.map(v=> {num3.push(v);});
num2.map(v=> {num3.push(v);});

var it=num3[Symbol.iterator]();
var index=0;

while(index<num3.length){
console.log(it.next().value);
index++;
}