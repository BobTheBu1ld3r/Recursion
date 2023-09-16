function fibsRec(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  const prev = fibsRec(n - 1);
  return prev.concat([prev[prev.length - 1] + prev[prev.length - 2]]);
}

console.log(fibsRec(8));
