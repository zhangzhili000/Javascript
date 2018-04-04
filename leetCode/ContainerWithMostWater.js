/**
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
**/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxVal = 0;
    var i=0;
    var j=height.length-1;
    var interval = j-i;
    while(i<j){
        interval = j-i;
        maxVal = Math.max(maxVal, interval*(Math.min(height[i],height[j])));
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
    }
    return maxVal;
};



testcase:
[1,1]
[1,1,3,4,5,66,7,4,3,2,1]
[1,2]
[1,2,1,1]
[1,1,5,5,1,1]
[5,4,4,3,4,5]
[5,1,2,2,3,1,5]