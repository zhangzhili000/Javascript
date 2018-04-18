There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length === 0 && nums2.length === 0){
        return 0;
    }
    if(nums1.length === 0){console.log("here!");
        let length = nums2.length;
        if(nums2.length%2 === 1){
            return nums2[parseInt((length)/2)];
        }else{
            return (nums2[parseInt((length-1)/2)]+nums2[parseInt((length)/2)])/2;
        }
    }
    if(nums2.length === 0){
        let length = nums1.length;
        if(length%2 === 1){
            return nums1[parseInt((length)/2)];
        }else{
            return (nums1[parseInt((length-1)/2)]+nums1[parseInt((length)/2)])/2;
        }
    }
    if(nums1.length>nums2.length){
        var tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    var len1 = nums1.length;
    var len2 = nums2.length;
    var len = len1+len2;
    var midlen = (len+1)/2;
    var len1max = len1;
    var len1min = 0;
    var len1mid = parseInt((len1max + len1min)/2);
    
    while(len1mid>=len1min && len1mid<=len1max){
        var len2mid = parseInt(midlen - len1mid);
        if(nums1[len1mid]<nums2[len2mid-1] && len1mid<len1max){
            len1mid++;
        }else if(nums1[len1mid-1]>nums2[len2mid] && len1mid > len1min){
            len1mid--;
        }else{
            var leftmax = 0;
            if(len1mid===0){
                leftmax = nums2[len2mid-1];
            }else if(len2mid === 0){
                leftmax = nums1[len1mid-1];
            }else{
                leftmax = Math.max(nums1[len1mid-1],nums2[len2mid -1]);
            }
            if((len1+len2)%2 === 1){
                return leftmax;
            }
            var rightmin = 0;
            if(len1mid===len1max){
                rightmin = nums2[len2mid];
            }else if(len2mid===len2){
                rightmin = nums1[len1mid];
            }else{
                rightmin = Math.min(nums1[len1mid],nums2[len2mid]);
            }
            
            return parseInt(rightmin+leftmax)/2;
        }
    }
    return 0;
};



Testcase:
[]
[]
[]
[1,2,3]
[1,2,3]
[]
[1,2,3,4,5,6,7,12,13,34]
[2,3,4,6,7,11,23,45]
[1,2,3,4,5,6,7,12,13,15,25,34]
[2,3,4,6,7,11,23,27,32,35,37,39,41,42,43,45,52]
