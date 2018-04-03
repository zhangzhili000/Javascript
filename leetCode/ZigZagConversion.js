/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

Method 1:
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <2){
        return s;
    }
    let save = [];
    let i=0;
    while(i<numRows){
        save[i] = "";
        i++;
    }
    let j = 0;
    let flag = true;//if true, from left to right. else, from right to left.
    for( let i=0;i<s.length;i++){
        save[j] += s.charAt(i);
        if(j==0){//go right
            flag = true;
            j=1;
        }else if(j==(numRows-1)){//go left
            flag = false;
            j=numRows-2;
        }else{
            if(flag){
                j++;
            }else{
                j--;
            }
        }
    }
    let output = "";
    for( let i in save){
        output += save[i];
    }
    return output;
};



Method 2:
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <2) {
        return s;
    }
    let output = "";
    let interval = 2*numRows-2;
    for(let i=0;i<numRows;i++){
       for(let j=i;j<s.length;j+=interval){
            output+=s.charAt(j);
            if(i!=0 && i!=(numRows-1)){
                var midChar = j+interval-2*i;
                if(midChar<s.length){
                    output+=s.charAt(midChar);    
                }
                
            }
        }
    }
    return output;
              
};


testcase:
"PAYPALISHIRgfsdfasfasgdfshgfhsgfdsgfsdgsINGPAYPALISHIRgfsdfasfasgdfshgfhsgfdsgfsdgsINGPAYPALISHIRgfsdfasfasgdfshgfhsgfdsgfsdgsINGPAYPALISHIRgfsdfasfasgdfshgfhsgfdsgfsdgsING"
100