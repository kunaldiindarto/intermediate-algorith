function convertHTML(str) {
  const strArr = str.split("");
  const result = strArr
    .map((alpha) => {
      switch (alpha) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
        default:
          return alpha;
      }
    })
    .join("");
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
