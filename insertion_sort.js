function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        var j = i - 1;
        while(arr[j] > currentVal){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([5,3,7,6,2]))