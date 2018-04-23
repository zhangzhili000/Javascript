问题：寻找下一个更大的数
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1


解决方案：
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length < 2){
        return ;
    }
    let maxi = nums.length - 1;
    let i = maxi;
    for(;i>0;i--){
        if(nums[i]>nums[i-1]){
            break;
        }
    }
    if(i===0){//reverse the nums
        reverse(nums,0,maxi);
        return ;
    }
    for(let k = maxi;k>i-1;k--){
        if(nums[k]>nums[i-1]){
            swap(nums,k,i-1);
            break;
        }
    }
    reverse(nums,i,maxi)
};
var reverse = function(nums,start,end){
    while(start < end){
        swap(nums,start,end);
        start++;
        end--;
    }
}
var swap = function(nums,a,b){
    let tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
}




Testcases:
[1,2,3,4,5,3,7,7,6,5,4]
[1,6,5,3,2]
[3,2,1]