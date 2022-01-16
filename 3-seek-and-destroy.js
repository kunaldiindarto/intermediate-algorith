function destroyer(arr) {
    const valRemove = Array.from(arguments).slice(1);
    return arr.filter((val) => {
        return !valRemove.includes(val);
    });
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);