# 学习map的笔记

## W3CShool的定义：
> ### Definition and Usage

>The map() method creates a new array with the results of calling a function for every array element.<br>
>map()方法产生一个新的数组，填充以调用的function对每一个元素执行之后的结果。 <br>
>The map() method calls the provided function once for each element in an array, in order.<br>
>对于每一个元素，map()方法按元素在数组中的顺序调用一次function。<br>
>Note: map() does not execute the function for array elements without values.<br>
>注意：如果数组中没有值，map()不执行function。<br>
>Note: map() does not change the original array.<br>
>注意：map()不改变原始数组。

从定义中我们可以得到如下结论：<br>
使用Array.map()可以将数组中的元素复制出来，并且不会对原来的数组产生影响，即进行值复制，而并非引用传递。<br>
下面对元素分别为数字和对象进行实验。

### 1.当Array中的元素为字符串和数字时：

例：
<pre><code>
let arr1 = [];
arr1 = ["hello",2,"world",4,5,6]
let arr2 = arr1.map(function (val) {
	return val;
});
console.log("arr1:",arr1,"\n arr2:",arr2);
arr2[2] = "hi";

console.log("arr1:",arr1,"\n arr2:",arr2);
</code></pre>
输出结果：
 <pre><code>
arr1: [ 'hello', 2, 'world', 4, 5, 6 ] 
arr2: [ 'hello', 2, 'world', 4, 5, 6 ]

arr1: [ 'hello', 2, 'world', 4, 5, 6 ] 
arr2: [ 'hello', 2, 'hi', 4, 5, 6 ]
</pre></code>

在上面的实验中，需要注意的是，arr1.map()，在map()中不带参数是不被认识的。必须带上一个函数。每一个在arr1中的元素都会执行一次这个函数。上例中，arr1中的每一个元素在每一次调用map()里面的function的时候，会将对应的value赋给val。

### 2.当Array中的元素为对象时：

例：
<pre><code>
/**
* 首先，定义三个对象，分别包含不同类型的元素。
*/
let obj1 = {name:"kitty",age:50,type:"toy"};
let obj2 = {init:function(){return this.age;},age:30,type:"function"};
let obj3 = {fun:function(a,b){return a+b;},type:"operation"};
/**
* 第二步，定义数组，将三个对象放入数组中。
*/
let arr1 = [];
arr1 = [obj1,obj2,obj3];
/**
* 第三步，定义另一个数组，将arr1用map()的方式复制到arr2中。
*/
let arr2 = arr1.map(function (val) {
	return val;
});
console.log("arr1:",arr1,"\n", "arr2:",arr2);
</code></pre>
以下显示的是现在的数组状态：
<code><pre>
arr1: (3) [{…}, {…}, {…}]
0: {name: "kitty", age: 50, type: "toy"}
1: {age: 30, type: "function", init: ƒ}
2: {type: "operation", fun: ƒ}
length: 3__proto__: Array(0) 

arr2: (3) [{…}, {…}, {…}]
0: {name: "kitty", age: 50, type: "toy"}
1: {age: 30, type: "function", init: ƒ}
2: {type: "operation", fun: ƒ}
length: 3__proto__: Array(0)
</code></pre>
将数组arr2中的第三个对象的函数对象fun修改为减法函数：
<code><pre>
arr2[2].fun = function(a,b){return a-b;};
console.log("arr1:",arr1,"\n", "arr2:",arr2);
console.log("arr1[2].fun:",arr1[2].fun(2,3),"\n", "arr2[2].fun:",arr2[2].fun(2,3));
</code></pre>
得到的输出：
<code><pre>
arr1: (3) [{…}, {…}, {…}]
0: {name: "kitty", age: 50, type: "toy"}
1: {age: 30, type: "function", init: ƒ}
2: {type: "operation", fun: ƒ}
length: 3__proto__: Array(0) 

arr2: (3) [{…}, {…}, {…}]
0: {name: "kitty", age: 50, type: "toy"}
1: {age: 30, type: "function", init: ƒ}
2: {type: "operation", fun: ƒ}
length: 3__proto__: Array(0)
//从这里我们可以看到，arr1的输出结果和arr2的是相同的，因此可以得知，map()只是进行了浅拷贝，即引用对象。在修改arr2的同时，arr1中的对象也变了。
arr1[2].fun: -1 
arr2[2].fun: -1
</code></pre>

综上所述，如果数组中的元素只是普通的字符串或者数字，可以使用map()进行复制。如果是对象元素，只是进行空间地址的引用。所以不可以用map()进行深度拷贝。


<p align="right">张智立</p>
<p align="right">2018年04月20日</p>
