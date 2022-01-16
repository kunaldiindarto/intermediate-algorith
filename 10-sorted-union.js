// spread operator buat ngambil semua argument
function uniteUnique(arr) {
    //* array flat buat gabungin dan pake set cara edan
    // return Array.from(new Set(arr.flat()));

    // return [...new Set(arr.concat(...arguments))];

    return [...new Set([...arguments].flat())];

}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));