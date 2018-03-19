
function chunkArrayInGroups(arr, size) {
    var newArray =[];
    var innerArray = [];
    
    for (var i=0;i<arr.length;i++){
        innerArray.push(arr[i]);
        if (innerArray.length==size){
            newArray.push(innerArray);
            innerArray=[];
        }
    }
    if (innerArray.length>0){
        newArray.push(innerArray);
    }
    console.log(newArray);
    return newArray;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
  