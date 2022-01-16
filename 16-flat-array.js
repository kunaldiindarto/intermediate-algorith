// const result = [];

// function steamrollArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       steamrollArray(arr[i]);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const result = [];

// function steamrollArray(arr, result = []) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       steamrollArray(arr[i], result);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// *cara rekursif 2
// function steamrollArray(arr, result = []) {
//   for (let i = 0; i < arr.length; i++) {
//     while(Array.isArray(arr[i]))
//   }
//   return result;
// }

console.log(steamrollArray([1, [2], [3, [[4]]]]));
