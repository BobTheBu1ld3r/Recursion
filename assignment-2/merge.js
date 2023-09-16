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

console.log(iterativeMerge([1, 2, 5, 6], [1, 4, 8]));

function recursiveMerge(arrL, arrR) {
  if (arrL.length == 0) return arrR;
  if (arrR.length == 0) return arrL;
  if (arrL[0] <= arrR[0]) {
    return [arrL.shift()].concat(recursiveMerge(arrL, arrR));
  }
  if (arrL[0] > arrR[0]) {
    return [arrR.shift()].concat(recursiveMerge(arrL, arrR));
  }
}

console.log(recursiveMerge([1, 2, 5, 6], [1, 4, 8]));
