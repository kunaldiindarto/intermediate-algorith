function dropElements(arr, func) {
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;

  // *cara lain
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!func(arr[i])) {
  //       arr.shift();
  //     } else {
  //       arr.shift();
  //       break;
  //     }
  //   }
  //   return arr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 3;
  })
);

// nilai array harusnya [3,4]
