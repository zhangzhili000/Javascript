问题：
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.



解决方案：（打败91.19%）
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length<2)return intervals;
    intervals = intervals.sort((a,b)=>{return (a.start-b.start);});
    for(let i = 1;i<intervals.length; ){
        let start1 = intervals[i-1].start;
        let start2 = intervals[i].start;
        let end1 = intervals[i-1].end;
        let end2 = intervals[i].end;
        if(start2<=end1){
            if(start1>start2){
                intervals[i-1].start = start2;    
            }
            if(end1 < end2){
                intervals[i-1].end = end2;
            }
            intervals.splice(i,1);
        }else{
            i++;
        }
    }
    return intervals;
};



Testcases:
[[1,3],[2,6],[3,5],[4,7],[5,8],[8,10],[15,18]]
[[1,3],[2,6],[8,10],[15,18]]
[[1,3],[8,10],[2,6],[15,18]]
[[1,4],[4,5]]
[[2,3],[4,5],[6,7],[8,9],[1,10]]
[[0,2],[2,3],[4,4],[0,1],[5,7],[4,5],[0,0]]