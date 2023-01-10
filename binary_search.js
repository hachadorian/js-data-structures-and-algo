function binarySearch(arr, num){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== num && start <= end){
        if (num < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], -1))