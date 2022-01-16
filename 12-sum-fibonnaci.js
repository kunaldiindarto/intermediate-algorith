function sumFibs(num) {
  // algoritma fibonacci
  let f0 = 0,
    f1 = 1,
    next,
    result = [];

  for (let i = 1; i <= num; i++) {
    // modulo untuk ganjil
    if (f1 % 2 === 1 && f1 <= num) {
      result.push(f1);
    }
    next = f0 + f1;
    f0 = f1;
    f1 = next;
  }

  return result.reduce((acc, curr) => acc + curr);
}

console.log(sumFibs(4));
