��Ŀ��
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.



��������������100%��ע�⣺���ص�������ĳ��ȣ����������鱾��

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    for(let i = 0;i<len;){
        if(nums[i] == nums[i+1]){
            i++;
            while(nums[i] == nums[i+1]){
                nums.splice(i+1,1);
            }
            len = nums.length;
        }
        i++;
    }
    return nums.length;
};



Testcases:
[1,1,1,2,2,3]