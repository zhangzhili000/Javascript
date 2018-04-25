/**
* when the elements are numbers.
*/

let arr1 = [];
arr1 = ["hello",2,"world",4,5,6]
let arr2 = arr1.map(function (val) {
	return val;
});
console.log("arr1:",arr1,"\n arr2:",arr2);
arr2[2] = "hi";

console.log("arr1:",arr1,"\n arr2:",arr2);



// /**
// * when the elements are objects.
// */
// let obj1 = {name:"kitty",age:50,type:"toy"};
// let obj2 = {init:function(){return this.age;},age:30,type:"function"};
// let obj3 = {fun:function(a,b){return a+b;},type:"operation"};
// let arr1 = [];
// arr1 = [obj1,obj2,obj3];
// let arr2 = arr1.map(function (val) {
// 	return val;
// });
// console.log("arr1:",arr1,"\n", "arr2:",arr2);
// arr2[2].fun = function(a,b){return a-b;};
// console.log("arr1:",arr1,"\n", "arr2:",arr2);

// console.log("arr1[2].fun:",arr1[2].fun(2,3),"\n", "arr2[2].fun:",arr2[2].fun(2,3));

