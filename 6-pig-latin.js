function translatePigLatin(str) {
    const consonantRegex = /^[^aeiou]+/;
    let inputConsonant = str.match(consonantRegex);

    if (inputConsonant !== null){
        return str
                .replace(consonantRegex, "")
                .concat(inputConsonant)
                .concat("ay");
    } else {
        return str.concat("way");
    }
  }
  
translatePigLatin("consonant");