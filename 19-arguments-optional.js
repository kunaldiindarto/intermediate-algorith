function addTogether() {
  if (!Array.from(arguments).every((el) => typeof el === "number")) {
    return undefined;
  }

  if (arguments.length === 1) {
    let oldArg = arguments[0];
    return () => addTogether(oldArg, arguments[0]);
  } else if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  }
}

// console.log(addTogether(2)());
console.log(addTogether(2, 3));
// console.log(addTogether(""));
