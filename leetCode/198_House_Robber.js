��Ŀ��
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.




��������������95.43%��������Ҫ���ǣ���ǰ��͵���ǲ�͵�������ǰ��͵�����ֵ��ǰһ����͵+��ǰ����ֵ�������ǰ����͵�����ֵ��ǰһ��͵�Ͳ�͵�����ֵ����

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max = 0;
    let pre = 0;
    nums.map((val)=>{
        let tmp = max;
        max = Math.max(max, pre+val);//max��ʾ��ǰ����͵��pre��ʾǰһ����͵�����ֵ��
        pre = tmp;//pre��ʾ��ǰ����͵�����ֵ��
    })
    return max;    
};


Testcases:
[1,2,3,1]
[2,7,9,3,1]
[2,1,1,2]
