function checkPalindrome(inputString) {
        for (var i=0; i<(inputString.length/2); i++) {
            if (inputString.substring(i,1) !== (inputString.substring(inputString.length-i-1,1)))
            {
                return false;
            }
        }
        return true;
    }

    
console.log(checkPalindrome('aabaa'));