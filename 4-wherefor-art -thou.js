function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    const srcKeys = Object.keys(source);
    let asd = collection.filter((obj) => {
        for (let i=0; i < srcKeys.length; i++){
            if(
                !obj.hasOwnProperty(srcKeys[i]) ||
                obj[srcKeys[i]] !== source[srcKeys[i]]
            ){return false;}
            
            return true;
        }
    });
    // Only change code above this line
    return asd;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  