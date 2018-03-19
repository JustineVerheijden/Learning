
function titleCase(str) {
    var strArray = str.split(' ');
    var title = strArray.map(function(a){
        return a[0].toUpperCase()+a.substring(1).toLowerCase();
    });
    var titleString = title.join(' ');
    return titleString;
  }
  
console.log(titleCase("I'm a little tea pot"));
  