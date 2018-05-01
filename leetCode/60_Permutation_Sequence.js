问题：
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.



解决方案一：时间超长，8800ms
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = [];
    let arr = [];
    for(let i = 0;i<n;i++){
        arr.push(i+1);
    }
    find(res,"",arr,n,k);
    return res[k-1];
};
var find = function(res,str,arr,n,k){
    if(str.length === n){
        res.push(str);
    }
    if(k === res.length){
        return ;
    }
    for(let i = 0;i<arr.length;i++){
        if(res.length < k){
            let tmp = arr.splice(i,1);
            find(res,str + tmp,arr,n,k);
            arr.splice(i,0,tmp[0]);
        }else{
            return;
        }
    }
};



解决方案二：（打败97.06%，理解排名第一的代码之后，重写）
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = "";
    let arr = [];
    let len = 1;
    for(let i = 1;i<=n;i++){
        len*=i;
        arr.push(i);
    }
    let block;
    k--;
    while(arr.length>0){
        let blockLen = len/n;
        block = Math.floor(k/blockLen);//k所在的区块
        k = k%blockLen;//k在这个区块的位置
        res = res+arr.splice(block,1);
        len = len/n;
        n--;
    }
    return res;
};




Testcases:
3
3
6
9
4
5