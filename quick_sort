function pivot(arr, start = 0, end = arr.length - 1){
    var pivot = arr[start];
    var swapIdx = start;
    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, i, swapIdx);    
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([5,2,1,8,4]));