function bubbleSort(arr){
    var noSwaps;
    for(let i = arr.length; i >= 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                noSwaps = false;
                swap(arr, j, j + 1);
            }
        }
        if(noSwaps) break;
    }
    return arr;  
}

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}