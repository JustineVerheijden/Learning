
function truncateString(str, num) {
    var truncString = str;
    if (str.length>num){
        if (num>3){
            truncString = truncString.substring(0,num-3)+'...';
        } else{
            truncString = truncString.substring(0,num)+"...";
        }
    }
    console.log(truncString);
    return truncString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);