function diffArray(arr1, arr2) {
    let asd = arr1
                .concat(arr2)
                .filter(val => !arr1.includes(val) || !arr2.includes(val));

    return asd;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);