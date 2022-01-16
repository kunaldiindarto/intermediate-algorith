// function truthCheck(collection, pre) {
//   for (let i = 0; i < collection.length; i++) {
//     if (!collection[i].hasOwnProperty(pre) || Boolean(collection[i][pre]) == false) {
//       return false;
//     }
//   }
//   return true;
// }

// *cara lain menggunakan every
function truthCheck(collection, pre) {
  return collection.every(
    (obj) => obj.hasOwnProperty(pre) && Boolean(obj[pre])
  );
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);
