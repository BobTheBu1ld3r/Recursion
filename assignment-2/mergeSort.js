function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let cutIndex = Math.floor(arr.length / 2);
    let arrL = mergeSort(arr.slice(0, cutIndex));
    let arrR = mergeSort(arr.slice(cutIndex));
    return iterativeMerge(arrL, arrR);
  }
}

function iterativeMerge(arrL, arrR) {
  const arrOut = [];

  while (arrL.length != 0 && arrR.length != 0) {
    if (arrL[0] <= arrR[0]) {
      arrOut.push(arrL.shift());
    }
    if (arrL[0] > arrR[0]) {
      arrOut.push(arrR.shift());
    }
  }
  return arrOut.concat(arrL).concat(arrR);
}

console.log(mergeSort([4, 5, 3, 2, 1, 10, 4, 5, 6, 9]));
