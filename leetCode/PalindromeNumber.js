/**
Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
 */


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    if(x>2147483647 || x<-2147483648){
        return false;
    }
    if(parseInt(x/10) ==0){
        return true;
    }
    let divNum = 1;
    let y = x;
    while(parseInt(y/10)!=0){
        divNum = 10*divNum;
        y=parseInt(y/10);
    }
    y=x;
    while(parseInt(x/10)!=0){
        if(Math.floor(y/divNum) != x%10){
            console.log(y,Math.floor(y/divNum),divNum);
            return false;
        }
        if(y - parseInt(y/divNum)*divNum>=0){
            y = y - parseInt(y/divNum)*divNum;
        }
        
        x = parseInt(x/10);
        divNum = parseInt(divNum/10);
        // console.log(x,y,divNum);
    }
    return true;
};


testcase:
200000002
-2147483648
3
478032542
4567890987654
121
2147557412
340000043
1000000001