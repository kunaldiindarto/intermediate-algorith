function spinalCase(str) {

    str = str.replace(/[a-z][A-Z]/g, "$1 $2");

    let str2 = str.toLowerCase().split(/(?:_| )+/).join("-");
    return str2;
}
  
spinalCase('This Is Spinal Tap');