# 学习map的笔记 #
使用Array.map()可以将数组中的元素复制出来，并且不会对原来的数组产生影响，即进行值复制，而并非引用传递。
### 1.当Array中的元素为数字时： ###

例：
<pre><code>let arr1 = [];
    arr1 = [1,2,3,4,5,6]
    let arr2 = arr1.map(function (val) {
	return val;
    });
console.log("arr1:",arr1,"\n arr2:",arr2);
arr2[3] = 10;
console.log("arr1:",arr1,"\n arr2:",arr2);
</code></pre>
输出结果：
 <pre><code>arr1: (6) [1, 2, 3, 4, 5, 6] 
 arr2: (6) [1, 2, 3, 4, 5, 6]
 arr1: (6) [1, 2, 3, 4, 5, 6] 
 arr2: (6) [1, 2, 3, 10, 5, 6]
 </pre></code>
在上面的实验中，需要注意的是，arr1.map()，在map()中不带参数是不被认识的。必须带上一个函数。每一个在arr1中的元素都会执行一次这个函数。上例中，arr1中的每一个元素在每一次调用map()里面的function的时候，会将对应的value赋给val。

### 2.当Array中的元素为对象时：###


